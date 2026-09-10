# Katalog flow

Flow to nazwany, powtarzalny sposób prowadzenia określonego rodzaju zadania.
Agent wybiera tylko flow, którego trigger pasuje do zadania. Nie łączy etapów
ani bramek z różnych flow bez wyraźnej instrukcji.

## Dostępne flow

| Flow | Uruchom, gdy | Artefakt końcowy |
| --- | --- | --- |
| [Problem solving](problem-solving.md) | Zadanie wymaga kilku zależnych etapów analizy i decyzji. | Final Implementation Context albo precyzyjny blocker. |

## Dodawanie kolejnego flow

Każdy nowy flow otrzymuje osobny plik w tym katalogu oraz wpis w tabeli.
Dokument flow musi określać:

1. trigger i wyłączenia;
2. etapy, ich kolejność oraz warunki powrotu;
3. właściciela każdego etapu i wymagane wejścia;
4. bramki, handoff oraz warunek zakończenia;
5. wpływ na implementację, jeśli flow ją dopuszcza.

Dodaj zwięzłą regułę do `AGENTS.md` tylko wtedy, gdy agent ma automatycznie
wybierać nowy flow. Zachowaj `AGENTS.md` jako router; szczegóły należą do pliku
konkretnego flow.
