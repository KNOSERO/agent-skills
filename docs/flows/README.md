# Katalog flow

Flow to nazwany, powtarzalny sposób prowadzenia określonego rodzaju zadania.
Agent wybiera tylko flow, którego trigger pasuje do zadania. Nie łączy etapów
ani bramek z różnych flow bez wyraźnej instrukcji.

## Dostępne flow

| Flow | Uruchom, gdy | Aktywacja | Artefakt końcowy |
| --- | --- | --- | --- |
| [Problem solve → problem-solving](problem-solving.md) | Trzeba ustalić, co należy zrobić, a zadanie wymaga zależnej analizy lub decyzji. | Entrypoint `problem-solve` (router lub użytkownik); `problem-solving` też bezpośrednio. | Potwierdzone rozwiązanie i Execution Handoff albo precyzyjny blocker. |
| [Implemented plan](implemented-plan.md) | Użytkownik **wyraźnie** chce przenieść ustaloną pracę do innego chatu lub agenta. | **Tylko ręczna.** | Jeden samodzielny prompt gotowy do kopiowania; READY_FOR_TRANSFER. |
| [Fix me → fixing](fix-me.md) | Użytkownik chce teraz wykonać potwierdzone rozwiązanie, ticket, plan lub instrukcję. | Entrypoint `fix-me` (router lub użytkownik); `fixing` też bezpośrednio. | Zmienione artefakty, weryfikacja i krótki raport wykonania. |

`fix-me` i `problem-solve` są małymi entrypointami: rozpoznają intencję i przekazują sterowanie do właściciela lifecycle (`fixing`, `problem-solving`). Nie implementują własnej logiki procesu.

implemented-plan nie jest etapem obowiązkowym między pozostałymi flow.
Nie może go automatycznie wywołać router, problem-solving, fixing ani inny flow.

`implementation-refinement` nie jest flow ani punktem wejścia. To capability wywoływana przez `fixing` po pierwszej trafnej weryfikacji nietrywialnej implementacji; zwraca wynik do `fixing`, nie przejmuje lifecycle ani dialogu z użytkownikiem.

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
