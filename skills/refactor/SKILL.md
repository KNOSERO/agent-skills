---
name: refactor
description: Analizuj wskazany kod według skilla programming-principles, przedstaw propozycje refaktoryzacji według priorytetów Blocker, Critical, Major i Minor, preferuj wielokrotny interaktywny wybór pozycji, gdy środowisko go obsługuje, a następnie wdrażaj wybrany zakres. Stosuj przy planowaniu i wykonywaniu refaktoryzacji istniejącego kodu.
---

# Refaktoryzacja — wersja robocza

## 1. Podstawa i zakres

Wymagany skill: `programming-principles`.

Przed analizą odszukaj ten skill po nazwie i wczytaj go przez mechanizm obsługi skillów dostępny w aktualnym środowisku. Stosuj jego aktualne zasady przy ocenie kodu, proponowaniu zmian, implementacji i weryfikacji. Nie zakładaj konkretnej ścieżki, struktury katalogów ani sposobu instalacji i nie kopiuj jego zasad tutaj. Jeśli skill jest niedostępny, poinformuj o brakującej zależności i poproś o jego udostępnienie przed analizą.

Pracuj na kodzie wskazanym przez użytkownika. Przeczytaj związane z nim kontrakty, miejsca użycia i testy, aby ocenić skutki zmian. Jeśli zakresu nie da się ustalić z rozmowy, poproś o jego wskazanie.

Zachowuj publiczny kontrakt i dotychczasowe zachowanie kodu. Zmianę funkcjonalną lub naprawę błędu przedstaw oddzielnie od refaktoryzacji, jeśli jest potrzebna.

## 2. Etapy pracy

| Etap | Jak postępować |
| --- | --- |
| Analiza | Sprawdź, gdzie zasady programowania mogą poprawić wskazany kod. Dla każdego problemu oceń jego skutek, proponowane rozwiązanie, korzyść, ryzyko i zależności. Na tym etapie nie zmieniaj kodu. |
| Lista propozycji | Przedstaw konkretne poprawki od najważniejszych do najmniej pilnych. Nadaj im stałe identyfikatory, np. R1, R2, R3. Każdą propozycję powiąż z miejscem w kodzie i odpowiednią zasadą programowania. |
| Wybór użytkownika | Po przedstawieniu listy zapytaj, które pozycje wdrożyć, i zaczekaj na odpowiedź przed pierwszą zmianą kodu. Wybór już podany w rozmowie pozostaje obowiązujący i nie wymaga ponownego potwierdzenia. |
| Interaktywny wybór | Jeśli środowisko udostępnia wielokrotny klikalny wybór, pokaż osobną opcję dla każdej propozycji. Etykieta powinna zawierać jej identyfikator, priorytet i krótki opis, np. `R3 — Major — podział metody process`. Pozwól zaznaczyć dowolny zestaw pozycji i odczytaj wybrane identyfikatory przed wdrożeniem. Nie łącz propozycji w jedną opcję „wszystkie”, gdy dostępne są checkboxy. |
| Zastępczy wybór | Jeśli środowisko obsługuje tylko pojedynczy wybór, pokaż opcje „Wdróż wszystkie”, „Wdróż do poziomu Major” oraz „Wybiorę konkretne pozycje”. Ostatnia opcja powinna pozwolić użytkownikowi wpisać identyfikatory, np. `R1, R3`. Jeśli nie ma żadnego strukturalnego mechanizmu wyboru, zadaj to samo pytanie w tekście. |
| Wdrożenie | Wprowadzaj wybrane poprawki etapami, zaczynając od najwyższego priorytetu i uwzględniając ich zależności. Jeśli wybrana poprawka wymaga pozycji spoza wyboru, wyjaśnij tę zależność i uzyskaj wybór dotyczący rozszerzenia zakresu. |
| Weryfikacja | Sprawdzaj zachowanie kontraktu testami odpowiednimi do zmiany, zgodnie z zasadami testowania w programming-principles. Nie dostosowuj oczekiwań testów do zmienionej implementacji, jeśli kontrakt pozostał ten sam. Jeśli brakuje istotnego pokrycia, uwzględnij potrzebny test w propozycji przed wdrożeniem. |
| Podsumowanie | Wskaż wykonane identyfikatory, zmienione pliki i wyniki weryfikacji. Zaznacz wybrane pozycje, których nie udało się ukończyć, oraz przyczynę. |

## 3. Priorytety

| Priorytet | Kiedy stosować |
| --- | --- |
| Blocker | Problem uniemożliwia bezpieczne wykonanie planowanej zmiany lub wiarygodne sprawdzenie zachowania kontraktu. Wskaż, jakie dalsze prace blokuje. |
| Critical | Problem w strukturze kodu stwarza wysokie ryzyko naruszenia kontraktu lub reguł domeny przy dalszych zmianach. |
| Major | Poprawka istotnie upraszcza odpowiedzialności, zależności lub ponowne użycie kodu, ale nie jest pilną przeszkodą. |
| Minor | Lokalna poprawa nazw, komentarzy lub czytelności o niewielkim wpływie na resztę kodu. |

Uzasadniaj priorytet rzeczywistym skutkiem problemu. Nie podnoś go wyłącznie dlatego, że kod odbiega od preferowanego stylu. Nie musisz znaleźć propozycji w każdej kategorii; jeśli zmiana nie daje konkretnej korzyści, pomiń ją.

## 4. Format propozycji

Przedstaw listę w poniższym układzie. Używaj krótkich opisów i odnośników do kodu. Zależności wskazuj identyfikatorami innych propozycji.

| ID | Priorytet | Miejsce i zasada | Problem, proponowana zmiana i korzyść | Ryzyko i zależności | Weryfikacja |
| --- | --- | --- | --- | --- | --- |

Nowe problemy odkryte podczas wdrażania dopisz z nowymi identyfikatorami do propozycji. Wdrażaj je po wyborze użytkownika, jeśli wykraczają poza zatwierdzony zakres.
