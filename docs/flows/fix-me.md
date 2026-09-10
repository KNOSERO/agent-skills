# Flow: Fix me

Ten flow wykonuje **potwierdzone rozwiązanie teraz**. Jego wynikiem są zmienione
artefakty i zweryfikowany rezultat, a nie kolejny plan.

## Kiedy uruchamiać flow

Użyj fix-me, gdy użytkownik prosi o implementację, poprawę, aktualizację,
refaktor, testy, dokumentację lub wykonanie dostarczonego ticketu, planu,
specyfikacji, Execution Handoff albo portable implementation prompt.

Nie używaj go, gdy użytkownik pyta wyłącznie, co należy zrobić. Użyj wtedy
problem-solving.

## Główny przebieg

~~~text
confirmed instruction
→ minimum needed inspection
→ material decision check
→ specialist routing
→ stage only when needed
→ change artifacts
→ verify
→ correct change-caused failures
→ finished result
~~~

Proste zadanie może przejść od zrozumienia do edycji, weryfikacji i wyniku.
Nie wykonuj etapów, które nie zmieniają następnej bezpiecznej decyzji.

## Zasady wejścia

| Rodzaj informacji | Działanie |
| --- | --- |
| Potwierdzona instrukcja | Wykonaj ją bez ponownego pytania. |
| Fakt możliwy do odkrycia | Ustal go samodzielnie przez najmniejsze potrzebne evidence. |
| Materialna otwarta decyzja | Użyj grilling. |
| Detal wykonawczy | Podejmij lokalną decyzję. |
| Sprzeczność z aktualnym projektem | Dopasuj lokalnie albo wróć do problem-solving lub grilling, gdy może zmienić rozwiązanie. |

## Routing

fix-me wybiera najmniejszy potrzebny zestaw skilli. Używa
token-efficient-retrieval przed evidence. Dla złożonego wykonania używa
implementation-discovery, gdy potrzebny jest dokładny scope, oraz
task-decomposition, gdy potrzebne są etapy, zależności lub granice
weryfikacji. Te capabilities wspierają wykonanie; flow po nich zawsze przechodzi
do edycji.

Nie uruchamiaj implementation-plan. To manual-only flow służący do transferu do
innego kontekstu, a nie wewnętrzny planner fix-me.

Użyj business-process-analysis gdy istniejący proces wpływa na zmianę,
programming-principles dla jakości kodu, refactor dla wymaganej zmiany struktury
bez zmiany zachowania, code-audit dla materialnego ryzyka oraz
documentation-guidelines przy tworzeniu lub aktualizacji dokumentacji. Nie
aktywuj ich tylko dlatego, że są powiązane z zadaniem.

## Weryfikacja i zakończenie

Najpierw użyj najmniejszej trafnej weryfikacji. Rozszerz ją tylko, gdy wymaga
to ryzyko albo wynik. Popraw failure spowodowany przez zmianę i zweryfikuj
ponownie. Udowodnij, że failure niezwiązany z zadaniem był wcześniejszy albo
niezależny, a następnie zgłoś go jasno.

Flow jest zakończony wyłącznie wtedy, gdy wykonano wymagany zakres, spełniono
kryteria akceptacji, przeszła dostępna istotna weryfikacja i nie pozostał
istotny znany regres. Nie rozszerzaj zakresu o przypadkowe porządki.
