---
name: code-audit
description: Analizuj wskazany kod pod kątem bezpieczeństwa, wydajności, niezawodności, poprawności i utrzymania, przedstaw ustalenia z dowodami oraz priorytetami Blocker, Critical, Major i Minor, a następnie wdrażaj pozycje wybrane przez użytkownika.
---

# Audyt kodu — wersja robocza

## 1. Podstawa i zakres

Wymagany skill: `programming-principles`.

Przed analizą odszukaj ten skill po nazwie i wczytaj go przez mechanizm obsługi skillów dostępny w aktualnym środowisku. Stosuj jego zasady przy analizie, proponowaniu zmian, implementacji i weryfikacji. Nie kopiuj jego treści tutaj.

Pracuj na kodzie wskazanym przez użytkownika. Przeczytaj związane z nim kontrakty, miejsca użycia, testy, konfigurację i sposób uruchamiania, jeśli są dostępne. Jeśli zakresu nie da się ustalić, poproś o jego wskazanie.

Domyślnie audyt jest analizą bez modyfikowania kodu. Zmiany wprowadzaj dopiero po przedstawieniu ustaleń i wyborze użytkownika. Jeśli użytkownik chce wyłącznie raportu, zakończ pracę po przedstawieniu wyników.

Nie nazywaj kodu podatnym, błędnym lub wolnym bez wskazania dowodu, możliwego scenariusza i skutku. Oddzielaj potwierdzone problemy od hipotez wymagających dodatkowego pomiaru lub sprawdzenia.

## 2. Obszary audytu

| Kategoria | Sprawdzaj |
| --- | --- |
| Bezpieczeństwo | Granice zaufania, walidację i kodowanie danych, uwierzytelnianie, autoryzację, sekrety, dane wrażliwe, injection, kryptografię, deserializację, ścieżki plików, SSRF, konfigurację i zależności. |
| Wydajność | Złożoność algorytmów, powtarzane operacje wejścia i wyjścia, zapytania N+1, zużycie pamięci, współbieżność, cache, rozmiar danych i niepotrzebne obliczenia. Potwierdzaj istotne ustalenia pomiarem, benchmarkiem lub profilerem. |
| Niezawodność | Obsługę błędów, timeouty, retry, idempotencję, transakcje, zwalnianie zasobów, warunki wyścigu, odporność na częściową awarię i obserwowalność. |
| Poprawność | Reguły biznesowe, walidację, niezmienniki, spójność danych, granice transakcji i zgodność z publicznym kontraktem. |
| Utrzymanie | Odpowiedzialności, zależności, hermetyzację, ponowne użycie, testowalność, czytelność i zgodność z `programming-principles`. |

Nie twórz ustalenia tylko dlatego, że kod różni się od preferowanego stylu. Uwzględniaj rzeczywisty wpływ na bezpieczeństwo, zachowanie, koszt działania lub przyszłe zmiany.

## 3. Etapy pracy

| Etap | Jak postępować |
| --- | --- |
| Zakres i kontekst | Ustal, co jest audytowane, jakie dane przetwarza kod, kto może go wywołać, jakie ma zależności i jaki kontrakt powinien zachować. Zapisz istotne założenia. |
| Analiza | Przejdź przez wszystkie odpowiednie kategorie. Szukaj ścieżki prowadzącej od wejścia do skutku oraz miejsc, w których może zostać naruszony kontrakt, bezpieczeństwo lub koszt działania. |
| Dowody | Dla każdego ustalenia wskaż plik, linię lub symbol, opis zaobserwowanego mechanizmu, scenariusz i skutek. Przy niepewności oznacz, czego brakuje do potwierdzenia. |
| Lista ustaleń | Posortuj ustalenia od najważniejszych do najmniej pilnych. Nadaj im stałe identyfikatory `T1`, `T2`, `T3` i kolejne, gdzie `T` oznacza task. Jedno ustalenie powinno opisywać jeden spójny problem i jedną proponowaną zmianę. |
| Wybór użytkownika | Po przedstawieniu listy zapytaj, które identyfikatory wdrożyć, i zaczekaj na odpowiedź przed pierwszą zmianą. Wybór już podany w rozmowie pozostaje obowiązujący. |
| Wdrożenie | Wprowadzaj wybrane zmiany etapami, zaczynając od najwyższego priorytetu i uwzględniając zależności. Najpierw usuwaj ryzyka bezpieczeństwa i poprawności, potem problemy niezawodności i wydajności, chyba że dowody uzasadniają inną kolejność. |
| Weryfikacja | Dobierz sprawdzenia do ustalenia: test kontraktu, test bezpieczeństwa, skan statyczny, audyt zależności, benchmark, profiler lub test odporności. Nie zastępuj sprawdzenia integracji mockiem, jeśli rzeczywista zależność jest dostępna w izolowanym środowisku. |
| Podsumowanie | Wskaż wykonane identyfikatory, zmienione pliki, wyniki weryfikacji i ustalenia, których nie udało się potwierdzić lub wdrożyć. |

Nowe problemy odkryte podczas wdrażania dopisz z nowymi identyfikatorami i zatrzymaj się przed ich wdrożeniem, jeśli nie mieszczą się w wyborze użytkownika.

## 4. Priorytety

| Priorytet | Kiedy stosować |
| --- | --- |
| Blocker | Problem uniemożliwia bezpieczne uruchomienie, wiarygodny audyt albo dalszą pracę bez natychmiastowego ryzyka. Wskaż, co blokuje. |
| Critical | Potwierdzone lub bardzo dobrze uzasadnione ryzyko wykorzystania, utraty danych, naruszenia reguł biznesowych, poważnej awarii albo nieakceptowalnego kosztu działania. |
| Major | Problem może istotnie pogorszyć bezpieczeństwo, niezawodność, wydajność lub możliwość dalszego rozwoju, ale nie blokuje bieżącego działania. |
| Minor | Lokalna poprawa o małym wpływie, na przykład ograniczenie zbędnej pracy, uproszczenie obsługi błędu albo usunięcie drobnej niejednoznaczności. |

Priorytet uzasadniaj skutkiem i prawdopodobieństwem, a nie samą kategorią problemu. Jeśli brakuje dowodów do ustalenia priorytetu, zaznacz niepewność.

## 5. Format ustaleń

Przedstaw listę w poniższym układzie. Używaj krótkich opisów i odnośników do kodu.

| ID | Kategoria | Priorytet | Miejsce i dowód | Ryzyko lub skutek | Zalecana zmiana | Pewność i zależności | Weryfikacja |
| --- | --- | --- | --- | --- | --- | --- | --- |

W opisie ustalenia wyjaśnij, dlaczego problem ma znaczenie. Nie opisuj wyłącznie tego, co robi kod. Zależności wskazuj identyfikatorami innych ustaleń.

## 6. Granice testów bezpieczeństwa

Analizę statyczną kodu i konfiguracji wykonuj w ramach wskazanego repozytorium. Testy dynamiczne, próby wykorzystania podatności i skany usług wykonuj tylko w środowisku, do którego użytkownik wskazał uprawniony dostęp. Nie testuj produkcji ani nie ujawniaj znalezionych sekretów.
