# Flow: Problem solve → problem-solving

`problem-solve` to mały entrypoint: rozpoznaje, że użytkownik ma otwarty problem
do przemyślenia, zachowuje dostępny stan i przekazuje sterowanie do
`problem-solving`. `problem-solving` ustala **co należy zrobić**. Nie wykonuje
rozwiązania. Kończy się potwierdzonym rozwiązaniem i samodzielną instrukcją
wykonawczą dla `fix-me` → `fixing`.

## Kiedy uruchamiać flow

Użyj `problem-solve`, gdy użytkownik pyta, co zrobić, albo problem,
wymaganie lub zmiana wymaga zależnej analizy faktów i decyzji. `problem-solving`
pozostaje też dostępny do bezpośredniej aktywacji.

Nie używaj go dla prostego, potwierdzonego zadania wykonawczego. Użyj wtedy
`fix-me`. Nie uruchamiaj go ponownie dla dostarczonego Execution Handoff, chyba
że nowe evidence bezpośrednio przeczy ustalonemu rozwiązaniu.

## Granica odpowiedzialności

```text
problem-solve → problem-solving = THINK
implemented-plan = MANUAL TRANSFER
fix-me → fixing = EXECUTE
```

`problem-solving` może analizować dokumentację, kod, konfigurację, testy i
inne źródła, gdy są potrzebne do wyboru rozwiązania. Nie zmienia kodu,
dokumentacji, testów ani konfiguracji. Nie wykonuje refaktoru, nie robi commita
i nie tworzy portable implemented-plan promptu.

## Kolejność

```text
PROBLEM_FRAMING
→ DOCUMENTATION_ANALYSIS
→ DECISION_CHECK
→ PROCESS_ANALYSIS
→ DECISION_CHECK
→ SOLUTION_DESIGN
→ DECISION_CHECK
→ EXECUTION_HANDOFF
→ READY_FOR_EXECUTION
```

Wróć tylko do najbliższego wcześniejszego etapu, który może wyjaśnić nowy brak
danych lub sprzeczność. Pomiń etap, który niczego nie wnosi, na przykład
analizę procesu dla problemu czysto koncepcyjnego.

| Etap | Właściciel | Wynik przed kolejnym etapem |
| --- | --- | --- |
| Zrozumienie problemu | `problem-solving` | Cel, wpływ, ograniczenia, non-goals i nieznane fakty. Bez proponowania rozwiązania. |
| Analiza dokumentacji | `documentation-analysis` | Fakty, ograniczenia, konflikty i źródła potrzebne do decyzji. |
| Decyzje | `grilling` | Potwierdzone materialne decyzje albo `NO_OPEN_DECISIONS`. |
| Analiza procesu | `business-process-analysis` | Granica procesu, reguły, stany, ścieżki błędów i braki. |
| Projekt rozwiązania | `solution-design` | Potwierdzony opis zachowania, granic i materialnych trade-offów. |
| Handoff | `context-state` w trybie `handoff` | Samodzielna instrukcja wykonawcza bez historii analizy. |

## Fakty i decyzje

Przed pobraniem evidence użyj `token-efficient-retrieval`. Najpierw ustal fakty
z dostępnych źródeł. Użyj `grilling` tylko dla materialnej decyzji, której nie
da się odkryć z evidence i która wpływa na zachowanie, zakres, kontrakt,
kompatybilność, architekturę lub przyszłe opcje. Nie pytaj o detal wykonawczy.

Jeżeli istnieje znaczący proces biznesowy lub systemowy, użyj
`business-process-analysis`. Jeżeli etap ma niezależne, istotne części, użyj
`task-decomposition`. Te skille zachowują własną odpowiedzialność.

## Execution Handoff

Najpierw pokaż użytkownikowi rekomendowane rozwiązanie i jego uzasadnienie.
Następnie zwróć osobny `Execution instruction`, który zawiera tylko:

```text
Goal
Confirmed solution
Important decisions
Constraints
Required changes
Acceptance criteria
Important verification
Known risks or blockers
```

To nie jest implemented-plan: nie opisuje kolejności edycji ani nie wybiera
technicznych detali, które należą do wykonania. Dla małego problemu handoff
jest krótki. Dla większego zawiera tylko informacje potrzebne wykonawcy.

Nie uruchamiaj automatycznie implemented-plan. Developer może później
uruchomić go ręcznie, aby przenieść established context do innego chatu lub
agenta.

## Zakończenie

Zakończ jako `READY_FOR_EXECUTION`, gdy solution i Execution Handoff są
potwierdzone, a nie ma blockerów. `fixing` traktuje ten handoff jako ustalony
kontekst i nie otwiera ponownie jego decyzji bez sprzecznego evidence.
