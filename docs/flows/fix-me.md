# Flow: Fix me

Ten flow wykonuje **potwierdzone rozwiązanie teraz** i pozostaje właścicielem całego lifecycle wykonania. Wynikiem są zmienione artefakty, quality saturation i zweryfikowany rezultat, a nie kolejny plan.

## Kiedy uruchamiać flow

Użyj fix-me dla implementacji, poprawy, aktualizacji, refaktoru, testów, dokumentacji albo wykonania potwierdzonego ticketu, planu, specyfikacji, Execution Handoff lub portable implementation prompt. Gdy trzeba dopiero ustalić rozwiązanie, użyj problem-solving.

## Główny przebieg

~~~text
confirmed instruction → minimum needed inspection → material decision check → specialist routing → implement → verify → implementation refinement when justified → quality saturation → final verification → finished result
~~~

Dla prostej, oczywistej zmiany wystarczy: understand → edit → verify → finish.

## Routing i handoff

| Caller | Capability | Kiedy | Return / handoff |
| --- | --- | --- | --- |
| fix-me | implementation-discovery | Dokładny scope jest potrzebny przed nietrywialną zmianą. | Scope, contracts, tests i ryzyka do fix-me. |
| fix-me | implementation-refinement | Nietrywialna zmiana przeszła początkową weryfikację. | Ulepszenia, verification, saturation albo eskalacja do fix-me. |
| implementation-refinement | refactor / code-audit | Struktura lub ryzyko może zmienić wartość kolejnej iteracji. | Compact opportunities albo material findings do refinement, bez dialogu z użytkownikiem. |
| implementation-refinement | programming-principles / documentation-guidelines | Jakość kodu, testów lub dokumentacji jest istotna dla zmienionego zakresu. | Zastosowane zasady do refinement. |
| każdy caller | grilling / problem-solving | Wymagana jest materialna decyzja albo potwierdzone rozwiązanie przestaje być bezpieczne. | Decyzja albo ponownie potwierdzone rozwiązanie do owning flow. |

fix-me używa najmniejszego potrzebnego zestawu skilli i token-efficient-retrieval przed evidence. implementation-plan jest manual-only i nie jest wewnętrznym plannerem tego flow.

## Refinement i granice scope

Dla nietrywialnego wykonania uruchom implementation-refinement po początkowej weryfikacji. Może przemyśleć strukturę, odpowiedzialności, zależności, testowalność, obsługę błędów, edge cases, niezawodność, prostotę oraz istotne performance lub security. Nie może zmieniać potwierdzonego zachowania, publicznych kontraktów, scope'u biznesowego ani materialnej architektury bez właściwej eskalacji.

Wewnątrz potwierdzonego scope'u można zastosować bezpieczne, behavior-preserving poprawki potrzebne do ukończenia instrukcji lub o wysokiej wartości. Problem niezwiązany ze zmienionym zakresem należy zgłosić, nie rozszerzać o niego pracy.

## Weryfikacja i zakończenie

Najpierw użyj najmniejszej trafnej weryfikacji; rozszerz ją tylko, gdy wymaga tego ryzyko albo wynik. Popraw failure spowodowany przez zmianę i zweryfikuj ponownie.

Zakończ po quality saturation: wykonano zakres i acceptance criteria, przeszła istotna weryfikacja, nie ma znanego Blocker/Critical/Major problemu w zmienionym zakresie ani oczywistego high-value ulepszenia, a kolejna iteracja ma tylko marginalną wartość wobec kosztu, złożoności i ryzyka regresji. Następnie wykonaj final verification.
