---
name: code-analysis
description: Analizuj wskazany moduł i jego bezpośredni kontekst, opisuj odpowiedzialność oraz przepływ, wykrywaj zbędne elementy i potencjalne błędy, a raport Markdown zwracaj w czacie bez modyfikowania repozytorium.
---

# Analiza kodu

## 1. Podstawa i granice

Przed przygotowaniem raportu odszukaj skill `documentation-guidelines` i wczytaj go przez mechanizm obsługi skillów dostępny w aktualnym środowisku. Traktuj go jako ogólną podstawę organizacji i przedstawiania dokumentacji. Analiza kodu dostarcza treść opisującą konkretny moduł, a `documentation-guidelines` nadaje jej formę odpowiednią do czytania w czacie.

Pracuj w trybie tylko do odczytu. Nie edytuj kodu, nie twórz ani nie aktualizuj plików dokumentacji w repozytorium, nie wykonuj refaktoryzacji i nie twórz commitów. Wynik zwróć bezpośrednio w czacie jako dokument Markdown.

Jeśli użytkownik nie wskazał jednoznacznie modułu albo zakresu, poproś o ścieżkę, nazwę modułu lub punkt wejścia. Domyślnie analizuj moduł oraz jego bezpośredni kontekst:

- eksporty, importy i bezpośrednie zależności,
- miejsca bezpośredniego użycia lub wywołania,
- testy modułu,
- konfigurację wpływającą na jego działanie,
- kontrakty wejścia, wyjścia i efektów ubocznych.

Nie przeszukuj całego systemu bez wyraźnej potrzeby. Rozszerz zakres tylko wtedy, gdy bezpośredni kontekst nie wystarcza do potwierdzenia działania albo ustalenia.

## 2. Etapy analizy

| Etap | Instrukcja |
| --- | --- |
| Zakres i interfejs | Ustal, jaki moduł jest analizowany, za co odpowiada, jakie ma wejścia i wyjścia, kto z niego korzysta oraz jakie skutki uboczne wywołuje. |
| Działanie i przepływ | Prześledź główną ścieżkę działania, decyzje, obsługę błędów, komunikację z zależnościami i istotne zmiany stanu. Opisz zarówno przebieg, jak i cel poszczególnych etapów. |
| Zbędne elementy | Szukaj martwego kodu, nieużywanych eksportów, powielonej logiki, niepotrzebnych zależności, zbędnych warstw oraz elementów, których odpowiedzialność jest niejasna. Wskaż dowód i wpływ, zamiast uznawać za zbędne wszystko, co nie jest idealnie proste. |
| Potencjalne błędy | Sprawdzaj naruszenia kontraktu, nieobsłużone dane lub stany, błędne warunki brzegowe, niespójność stanu, problemy z obsługą błędów i rozbieżności między kodem a testami. Każde ustalenie poprzyj lokalizacją, scenariuszem i skutkiem. |
| Raport | Po analizie opisz moduł jako dokumentację zgodną z `documentation-guidelines`. Uwzględnij odpowiedzialność, cel i działanie modułu, przepływ, zależności i kontrakty, testy, zbędne elementy oraz potencjalne błędy. Zwróć wynik w czacie jako Markdown i nie twórz pliku wynikowego. |

Nie przedstawiaj hipotezy jako potwierdzonego błędu. Rozdzielaj obserwacje potwierdzone od podejrzeń wymagających dodatkowego testu, pomiaru lub informacji. Nie wymyślaj brakujących faktów.

## 3. Ustalenia analizy

Każde ustalenie oznacz kolejnym identyfikatorem `T1`, `T2`, `T3` itd. Identyfikatory służą do jednoznacznego odwoływania się do obserwacji i nie oznaczają zadań do automatycznego wdrożenia.

Przedstaw zbędne elementy i potencjalne błędy w tabeli:

| ID | Typ | Miejsce i dowód | Ustalenie | Możliwy skutek | Pewność |
| --- | --- | --- | --- | --- | --- |

W wierszu dotyczącym potencjalnego błędu opisz możliwy scenariusz i skutek. W wierszu dotyczącym zbędnego elementu wyjaśnij, dlaczego nie wnosi wartości i jaki koszt lub ryzyko powoduje. Przy każdym ustaleniu podaj ścieżkę oraz numer linii lub nazwę symbolu, jeśli są dostępne.

Nie proponuj ani nie wykonuj zmian kodu w ramach tego skilla. Jeśli użytkownik chce napraw, przekaż ustalenia do odpowiedniego skilla dopiero po osobnym poleceniu.

## 4. Kontrola przed odpowiedzią

Przed wysłaniem raportu sprawdź:

- czy analizowany zakres obejmuje moduł i jego bezpośredni kontekst,
- czy raport zachowuje aktualną strukturę wymaganą przez `documentation-guidelines`,
- czy opisano odpowiedzialność, działanie, zbędne elementy i potencjalne błędy,
- czy każde ustalenie ma identyfikator `T`, dowód i informację o pewności,
- czy diagramy, jeśli są potrzebne, spełniają aktualne zasady `documentation-guidelines` i są spójne z opisem,
- czy nie ma nieuzasadnionych twierdzeń ani informacji wymagających potwierdzenia przedstawionych jako fakty,
- czy nie zmodyfikowano żadnego pliku w repozytorium.

Na końcu raportu wskaż zakres odczytanych plików oraz informacje, których nie udało się potwierdzić. Zwróć dokument w czacie i nie zapisuj go jako pliku `.md`.
