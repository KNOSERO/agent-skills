# Katalog flow

Flow to nazwany, powtarzalny sposób prowadzenia określonego rodzaju zadania.
Agent wybiera tylko flow, którego trigger pasuje do zadania. Nie łączy etapów
ani bramek z różnych flow bez wyraźnej instrukcji.

## Dostępne flow

| Flow | Uruchom, gdy | Aktywacja | Artefakt końcowy |
| --- | --- | --- | --- |
| [Problem solving](problem-solving.md) | Trzeba ustalić, co należy zrobić, a zadanie wymaga zależnej analizy lub decyzji. | Router lub użytkownik. | Potwierdzone rozwiązanie i Execution Handoff albo precyzyjny blocker. |
| [Implementation plan](implementation-plan.md) | Użytkownik **wyraźnie** chce przenieść ustaloną pracę do innego chatu lub agenta. | **Tylko ręczna.** | Jeden samodzielny prompt gotowy do kopiowania; READY_FOR_TRANSFER. |
| [Fix me](fix-me.md) | Użytkownik chce teraz wykonać potwierdzone rozwiązanie, ticket, plan lub instrukcję. | Router lub użytkownik. | Zmienione artefakty, weryfikacja i krótki raport wykonania. |

implementation-plan nie jest etapem obowiązkowym między pozostałymi flow.
Nie może go automatycznie wywołać router, problem-solving, fix-me ani inny flow.

`implementation-refinement` nie jest flow ani punktem wejścia. To capability wywoływana przez `fix-me` po pierwszej trafnej weryfikacji nietrywialnej implementacji; zwraca wynik do `fix-me`, nie przejmuje lifecycle ani dialogu z użytkownikiem.

## Dodawanie kolejnego flow

Każdy nowy flow otrzymuje osobny plik w tym katalogu oraz wpis w tabeli.
Dokument flow musi określać:

1. trigger i wyłączenia;
2. etapy, ich kolejność oraz warunki powrotu;
3. właściciela każdego etapu i wymagane wejścia;
4. bramki, handoff oraz warunek zakończenia;
5. wpływ na implementację, jeśli flow ją dopuszcza.

Dodaj zwięzłą regułę do AGENTS.md tylko wtedy, gdy agent ma automatycznie
wybierać nowy flow. Zachowaj AGENTS.md jako router; szczegóły należą do pliku
konkretnego flow.
