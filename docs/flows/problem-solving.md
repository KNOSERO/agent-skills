# Flow: Problem solving

Ten dokument definiuje, jak agent ma prowadzić złożone zadania w tym
repozytorium. Jego celem jest najpierw ustalić właściwe zachowanie systemu, a
dopiero później planować i pisać kod.

To pierwszy z wielu flow w repozytorium. Jego reguły, w tym bramka przed
kodowaniem, dotyczą wyłącznie zadań, dla których wybrano ten flow.

## Kiedy uruchamiać flow

Użyj `problem-solving`, gdy zadanie zawiera niejasny problem, wymaganie,
zmianę zachowania, decyzję produktową lub techniczną albo wymaga kilku
zależnych etapów.

Nie uruchamiaj pełnego flow dla prostego zadania, gdy rozwiązanie, zakres i
kryteria akceptacji są już jednoznaczne. W takim przypadku użyj bezpośrednio
odpowiedniego wyspecjalizowanego skilla.

Przykład rozpoczęcia:

```text
$problem-solving
Przy tworzeniu claima system nie znajduje polisy dla właściwego okresu.
Chcę poprawić zachowanie bez zmiany istniejących zasad walidacji.
```

## Obowiązująca kolejność

```text
PROBLEM_FRAMING
→ DOCUMENTATION_ANALYSIS
→ PROBLEM_GRILL
→ PROCESS_ANALYSIS
→ PROCESS_GRILL
→ SOLUTION_DESIGN
→ SOLUTION_GRILL
→ IMPLEMENTATION_DISCOVERY
→ IMPLEMENTATION_GRILL
→ IMPLEMENTATION_PLAN
→ FINAL_CONTEXT
→ READY_FOR_IMPLEMENTATION
```

Agent może wrócić wyłącznie do najbliższego wcześniejszego etapu, który może
wyjaśnić nowy brak danych albo sprzeczność. Nie omija bramek ani nie pyta o
decyzje zależne od faktów, których jeszcze nie ustalił.

Każdy etap `*_GRILL` jest twardą bramką. Agent zawsze aktywuje `grilling` z
odpowiednim scope i nie zastępuje go własnym pytaniem, rekomendacją ani
założeniem. Domyślnie `grilling` zadaje co najmniej jedno konkretne pytanie.
Może zwrócić `NO_OPEN_DECISIONS` dopiero po sprawdzeniu frontu decyzyjnego.
Pominięcie bramki jest dozwolone wyłącznie wtedy, gdy użytkownik wprost nie
chce wywiadu albo wyraźnie delegował wszystkie decyzje w danym scope.

## Etapy i odpowiedzialność

| Etap | Skill | Wynik konieczny przed kolejnym etapem |
| --- | --- | --- |
| Zrozumienie problemu | `problem-solving` | Problem, cel, wpływ, ograniczenia, non-goals i nieznane fakty. Bez proponowania rozwiązania. |
| Analiza dokumentacji | `documentation-analysis` | Potwierdzone fakty, ograniczenia, konflikty i precyzyjne źródła. |
| Decyzje o problemie | `grilling` (`problem`) | Potwierdzony model problemu albo wskazanie brakujących faktów. |
| Analiza procesu | `business-process-analysis` | Granica procesu, reguły, stany, ścieżki błędów i nieznane elementy. |
| Decyzje o procesie | `grilling` (`process`) | Potwierdzone decyzje wynikające z istniejącego procesu. |
| Projekt rozwiązania | `solution-design` | Potwierdzony opis oczekiwanego zachowania, granic i trade-offów. |
| Decyzje o rozwiązaniu | `grilling` (`solution`) | Potwierdzona koncepcja `WHAT`, bez wyboru klas i plików. |
| Discovery implementacyjne | `implementation-discovery` | Dokładne moduły, kontrakty, zależności, ryzyka i obszary testów. |
| Decyzje implementacyjne | `grilling` (`implementation`) | Ustalony `HOW`, gdy wybór wpływa na przyszłe zachowanie lub architekturę. |
| Plan | `implementation-plan` | Zależny, weryfikowalny plan z dokładnymi targetami i kryteriami akceptacji. |
| Finalny handoff | `context-state` (`final`) | Final Implementation Context oraz status gotowości. |

## Zasady decyzji i evidence

Agent najpierw ustala fakty z dokumentacji, kodu, konfiguracji, testów lub
innych dostępnych źródeł. Przed każdym pobraniem danych używa
`token-efficient-retrieval`.

`grilling` dotyczy decyzji, których nie można odkryć z evidence i które
wpływają na zachowanie, zakres, kontrakt, kompatybilność, architekturę lub
dalsze opcje. Po jego twardej aktywacji agent pyta tylko o aktualny front
decyzyjny. Nie zastępuje odpowiedzi użytkownika własną rekomendacją.

Użytkownik może ręcznie rozpocząć wywiad:

```text
$grill-me
Pomóż mi podjąć decyzję dotyczącą obsługi braku polisy.
```

## Stan zadania i handoff

Po każdym istotnym etapie agent aktualizuje `context-state`. Stan ma trzy
warstwy:

- **Active Context** — aktualny problem, potwierdzone fakty, ograniczenia,
  decyzje, pytania i blokery.
- **Decision Ledger** — krótki zapis potwierdzonych, odroczonych, odrzuconych
  i zastąpionych decyzji wraz z powodem.
- **Evidence Index** — precyzyjne wskazania źródeł i faktów, które wspierają.

Nie przenoś do Active Context pełnych logów, całego Q&A, odrzuconych pomysłów,
starego reasoning ani surowej dokumentacji. Informacja odrzucona lub zastąpiona
może pozostać jedynie jako krótki wpis w Decision Ledger.

Przed przekazaniem zadania do świeżego kontekstu lub innego agenta użyj trybu
`handoff`. Przekazuj tylko aktywny stan, istotne wpisy ledger oraz indeks
evidence.

## Bramka przed kodowaniem

Kod można pisać wyłącznie po utworzeniu **Final Implementation Context** przez
`context-state` w trybie `final` i tylko gdy:

```yaml
ready_for_implementation: true
blockers: []
```

Final Implementation Context zawiera wyłącznie:

1. problem i oczekiwany wynik;
2. potwierdzone fakty, ograniczenia i non-goals;
3. potwierdzony proces biznesowy, jeśli ma znaczenie;
4. potwierdzone rozwiązanie;
5. decyzje implementacyjne i dokładne obszary zmian;
6. kryteria akceptacji i weryfikację;
7. pozostałe blokery.

Agent implementujący traktuje ten artefakt jako definicję zadania. Nie otwiera
ponownie ustalonych decyzji, chyba że nowe evidence implementacyjne bezpośrednio
im przeczy.

## Skróty dla prostszych sytuacji

| Sytuacja | Wejście |
| --- | --- |
| Rozwiązanie jest potwierdzone, ale nie znasz miejsc w repozytorium | `implementation-discovery` |
| Koncepcja i scope techniczny są potwierdzone | `implementation-plan` |
| Chcesz tylko podjąć materialną decyzję | `grill-me` |
| Chcesz wyjaśnić istniejący proces | `business-process-analysis` |

Jeżeli podczas skróconej ścieżki pojawi się materialna niepewność, agent wraca
do najbliższego właściwego etapu pełnego flow.
