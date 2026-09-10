# Flow: Fix me → fixing

`fix-me` to mały entrypoint: rozpoznaje, że użytkownik chce **wykonać potwierdzone rozwiązanie teraz**, zachowuje dostępny stan i przekazuje sterowanie do `fixing`. `fixing` pozostaje właścicielem całego lifecycle wykonania. Wynikiem są zmienione artefakty, quality saturation i zweryfikowany rezultat, a nie kolejny plan.

## Kiedy uruchamiać flow

Użyj fix-me dla implementacji, poprawy, aktualizacji, refaktoru, testów, dokumentacji albo wykonania potwierdzonego ticketu, planu, specyfikacji, Execution Handoff lub portable implemented-plan prompt. Gdy trzeba dopiero ustalić rozwiązanie, użyj problem-solve.

## Główny przebieg

~~~text
confirmed instruction → minimum needed inspection → material decision check
→ specialist routing → material decision check
→ implement → verify → material decision check
→ implementation refinement when justified → quality saturation → final verification → finished result
~~~

Dla prostej, oczywistej zmiany wystarczy: understand → edit → verify → finish.

`material decision check` nie jest jednorazowym krokiem na starcie. Każdy
kolejny etap wykonania może odsłonić decyzję, której wcześniej nie było
widać — np. discovery zawęża zakres, implementacja odsłania wybór kontraktu,
refinement znajduje trade-off strukturalny. `fixing` wraca wtedy do
`grilling` zamiast milcząco zakładać i kontynuować, i nie zbiera kilku
etapów pracy przed zapytaniem użytkownika.

## Routing i handoff

| Caller | Capability | Kiedy | Return / handoff |
| --- | --- | --- | --- |
| fixing | implementation-discovery | Dokładny scope jest potrzebny przed nietrywialną zmianą. | Scope, contracts, tests i ryzyka do fixing. |
| fixing | implementation-refinement | Nietrywialna zmiana przeszła początkową weryfikację. | Ulepszenia, verification, saturation albo eskalacja do fixing. |
| implementation-refinement | refactor / code-audit | Struktura lub ryzyko może zmienić wartość kolejnej iteracji. | Compact opportunities albo material findings do refinement, bez dialogu z użytkownikiem. |
| implementation-refinement | programming-principles / documentation-guidelines | Jakość kodu, testów lub dokumentacji jest istotna dla zmienionego zakresu. | Zastosowane zasady do refinement. |
| każdy caller | grilling / problem-solving | Wymagana jest materialna decyzja albo potwierdzone rozwiązanie przestaje być bezpieczne. | Decyzja albo ponownie potwierdzone rozwiązanie do owning flow. |

fixing używa najmniejszego potrzebnego zestawu skilli i token-efficient-retrieval przed evidence. implemented-plan jest manual-only i nie jest wewnętrznym plannerem tego flow.

## Refinement i granice scope

Dla nietrywialnego wykonania uruchom implementation-refinement po początkowej weryfikacji. Może przemyśleć strukturę, odpowiedzialności, zależności, testowalność, obsługę błędów, edge cases, niezawodność, prostotę oraz istotne performance lub security. Nie może zmieniać potwierdzonego zachowania, publicznych kontraktów, scope'u biznesowego ani materialnej architektury bez właściwej eskalacji.

Wewnątrz potwierdzonego scope'u można zastosować bezpieczne, behavior-preserving poprawki potrzebne do ukończenia instrukcji lub o wysokiej wartości. Problem niezwiązany ze zmienionym zakresem należy zgłosić, nie rozszerzać o niego pracy.

## Weryfikacja i zakończenie

Najpierw użyj najmniejszej trafnej weryfikacji; rozszerz ją tylko, gdy wymaga tego ryzyko albo wynik. Popraw failure spowodowany przez zmianę i zweryfikuj ponownie.

Zakończ po quality saturation: wykonano zakres i acceptance criteria, przeszła istotna weryfikacja, nie ma znanego Blocker/Critical/Major problemu w zmienionym zakresie ani oczywistego high-value ulepszenia, a kolejna iteracja ma tylko marginalną wartość wobec kosztu, złożoności i ryzyka regresji. Następnie wykonaj final verification.
