---
name: documentation-guidelines
description: Twórz i aktualizuj dokumentację Markdown w repozytorium ze stałym rdzeniem sekcji, najważniejszymi informacjami na początku, prostym stylem i diagramami Mermaid dla istotnych przepływów.
---

# Tworzenie dokumentacji

## 1. Cel i zakres

Twórz oraz aktualizuj dokumentację Markdown tak, aby czytelnik szybko znalazł najważniejsze informacje, a następnie mógł przejść do celu, sposobu działania i szczegółów.

Przed napisaniem dokumentu odczytaj istniejącą dokumentację, README, konfigurację, wskazane źródła i miejsca użycia opisywanego elementu. Ustal typ dokumentu, odbiorcę, zakres oraz dominujący język repozytorium. Jeśli repozytorium nie ma wzorca językowego, używaj języka polskiego.

Nie wymyślaj brakujących faktów. Oznacz informacje nieznane, niepotwierdzone lub wymagające decyzji. Zachowuj istniejące konwencje nazw, lokalizacji, linków i formatowania.

## 2. Stała struktura dokumentu

Każdy dokument powinien używać poniższego minimalnego rdzenia i zachować kolejność sekcji:

| Kolejność | Sekcja | Zawartość |
| --- | --- | --- |
| 1 | **Najważniejsze informacje** | Krótki punkt wejścia dopasowany do typu dokumentu. Dla instalacji podaj najpierw wymagania i kroki instalacji. Dla dokumentu biznesowego podaj podstawowe informacje potrzebne do zrozumienia tematu. Dla instrukcji użycia podaj szybki sposób wykonania zadania. Dla decyzji lub procesu podaj najważniejszy kontekst i wynik. |
| 2 | **Cel** | Wyjaśnij, po co dokument lub opisywany element istnieje, jaki problem rozwiązuje i jaki rezultat opisuje. |
| 3 | **Przepływ** | Opisz, jak coś działa lub ma działać. Dla każdego istotnego procesu, komunikacji albo cyklu życia dodaj odpowiedni diagram Mermaid. |
| 4 | **Szczegóły** | Umieść konfigurację, reguły, przykłady, warianty i informacje potrzebne po zrozumieniu podstaw. |
| 5 | **Ograniczenia** | Opisz warunki brzegowe, znane problemy, brakujące elementy i sytuacje wymagające dodatkowej uwagi. |

Jeśli sekcja nie ma zastosowania, pozostaw ją w strukturze i krótko zapisz, że nie dotyczy danego dokumentu. Nie przenoś szczegółów przed sekcję **Najważniejsze informacje**.

## 3. Zasady czytelności

- Pisz prostymi zdaniami i krótkimi akapitami.
- Każdy akapit rozwijaj wokół jednego tematu.
- Używaj list do kroków i tabel do równoległych informacji.
- Definiuj termin przy pierwszym użyciu, jeśli odbiorca może go nie znać.
- Opisuj zarówno przebieg, jak i cel działania, gdy oba są potrzebne do zrozumienia.
- Ograniczaj dygresje, powtórzenia i informacje, które nie pomagają wykonać zadania lub zrozumieć tematu.
- Używaj przykładów tylko wtedy, gdy wyjaśniają sposób użycia albo zachowanie w konkretnej sytuacji.
- Nie zastępuj najważniejszych informacji długim wstępem.

## 4. Diagramy Mermaid

Dodaj diagram dla każdego istotnego przepływu. Nie dodawaj diagramu do dokumentu zawierającego wyłącznie fakty, definicje lub prostą listę właściwości.

Dobieraj typ diagramu do opisywanej relacji:

| Sytuacja | Diagram Mermaid |
| --- | --- |
| Kolejne kroki procesu i decyzje | `flowchart` |
| Komunikacja między aktorami lub usługami | `sequenceDiagram` |
| Zmiany statusu lub cykl życia | `stateDiagram-v2` |
| Relacje encji lub struktura danych | `erDiagram` |
| Relacje klas i zależności typów | `classDiagram` |

Diagram powinien pokazywać główne elementy, kierunek przepływu i decyzje wpływające na wynik. Utrzymuj go na tyle małym, aby można było zrozumieć go bez powiększania. Szczegóły, które nie wpływają na przepływ, opisz pod diagramem.

Tekst diagramu musi być napisany w tym samym języku co dokument. Tłumacz nazwy węzłów, etykiety, aktorów, stanów i opisy decyzji; techniczna składnia Mermaid, taka jak `flowchart` albo `sequenceDiagram`, pozostaje bez zmian.

Po dodaniu diagramu sprawdź składnię bloku Mermaid oraz zgodność nazw w diagramie z treścią dokumentu.

## 5. Tworzenie i aktualizowanie plików

Najpierw przygotuj plan dokumentu, a dopiero potem uzupełniaj szczegóły. Utwórz wskazany plik albo zaktualizuj istniejący, zachowując jego potwierdzone informacje i lokalne konwencje.

Nie modyfikuj niezwiązanych plików. Jeśli istniejący dokument ma inną strukturę, uporządkuj go do stałego rdzenia tylko w zakresie objętym zadaniem. Nie usuwaj informacji bez sprawdzenia, czy nie są używane jako źródło wiedzy lub odnośnik.

Po zmianie sprawdź:

- kolejność i obecność pięciu sekcji rdzenia,
- zgodność treści **Najważniejszych informacji** z typem dokumentu,
- poprawność nagłówków, linków, list, tabel i bloków Mermaid,
- zgodność języka tekstu diagramów Mermaid z językiem dokumentu,
- czy nie pozostały nieuzasadnione twierdzenia ani niepotrzebne powtórzenia,
- czy zmiany dotyczą wyłącznie wskazanego zakresu.

## 6. Podsumowanie pracy

Na końcu podaj zmienione pliki, rodzaj dokumentu, zastosowaną strukturę, dodane diagramy oraz informacje, których nie udało się potwierdzić. Jeśli dokument wymaga decyzji użytkownika, wskaż ją wyraźnie zamiast przyjmować nieudokumentowane założenie.
