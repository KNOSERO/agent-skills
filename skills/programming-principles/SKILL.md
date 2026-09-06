---
name: programming-principles
description: Bazowe zasady pisania i refaktoryzowania kodu źródłowego oraz testów, stosowane samodzielnie i przez skille zadaniowe, niezależnie od języka, frameworka i bibliotek. Zachowuj jedną odpowiedzialność, kompozycję, czytelną ekstrakcję, proste nazwy i komentarze wyjaśniające powody decyzji. Modeluj domenę z wyraźnymi granicami, hermetyzacją i wspólnym językiem. Testuj kontrakty, preferując rzeczywiste zależności i ograniczając moki.
---

# Zasady programowania — skill bazowy (wersja robocza)

Skill określa sposób pisania i refaktoryzowania kodu niezależnie od języka, frameworka i bibliotek. Celem jest kod, którego odpowiedzialności i intencje łatwo zrozumieć.

`programming-principles` stanowi wspólną podstawę zasad kodu i testów. Skille zadaniowe, takie jak `refactor`, wskazują go jako wymaganą zależność po nazwie i wczytują jego aktualną treść przez mechanizm dostępny w danym środowisku. Ich własne instrukcje określają przebieg pracy i oczekiwany wynik zadania. Wspólne zasady utrzymuj w tym skillu, bez powielania ich w skillach zadaniowych.

## 1. Odpowiedzialność i struktura kodu

| Zasada | Jak stosować |
| --- | --- |
| Jeden element kodu — jedno konkretne zadanie | Każda funkcja, klasa i komponent powinny mieć jedno jasno określone zadanie, czyli jedną spójną odpowiedzialność. Stosuj tę zasadę niezależnie od formy zapisu i nazewnictwa używanego przez daną technologię. Jeżeli element wykonuje kilka niezależnych zadań, wydziel je do mniejszych funkcji, klas lub komponentów.<br><br>Jednym zadaniem może być również koordynowanie operacji lub składanie interfejsu z mniejszych komponentów. Taki element powinien przedstawiać sposób ich połączenia, a szczegóły poszczególnych zadań pozostawiać elementom, którym je deleguje. |
| Odpowiedzialność klasy | Klasa powinna mieć jedno konkretne zadanie. Jej metody i dane powinny wspólnie służyć jego realizacji. Zasada jednej odpowiedzialności dotyczy zarówno całej klasy, jak i każdej z jej metod. Gdy klasa łączy niezależne zadania, wydziel je do mniejszych elementów. |
| Odpowiedzialność komponentu | Komponent, na przykład w React, powinien odpowiadać za jedną spójną część interfejsu lub kompozycję mniejszych komponentów. Oceniaj jego odpowiedzialność według roli w aplikacji. Gdy łączy niezależne zadania, wydziel odpowiednie części interfejsu do mniejszych komponentów, a samodzielną logikę do osobnych funkcji lub innych elementów właściwych dla technologii. |
| Dobór formy do zadania | Dobieraj formę do zadania. Używaj funkcji do samodzielnych operacji, a klasy wtedy, gdy sensowne jest połączenie powiązanych zachowań i danych lub zarządzanie stanem. Nie twórz klasy wyłącznie po to, aby opakować funkcję. |
| Spójny poziom szczegółowości | Oddzielaj kod opisujący przebieg operacji lub kompozycję komponentów od szczegółów realizacji poszczególnych zadań. Na przykład funkcja opisująca proces składania zamówienia powinna operować krokami tego procesu, a szczegóły parsowania danych pozostawić funkcjom pomocniczym. Podobnie komponent składający formularz z sekcji powinien pozostawiać szczegóły ich działania odpowiednim mniejszym elementom. |

## 2. Kompozycja i ponowne użycie

| Zasada | Jak stosować |
| --- | --- |
| Preferuj kompozycję zamiast dziedziczenia | Buduj zachowanie przez łączenie mniejszych obiektów, funkcji i komponentów oraz delegowanie im konkretnych zadań. Jeśli kilka elementów potrzebuje tej samej logiki lub części interfejsu, wydziel ją do małej klasy, funkcji lub komponentu, z których te elementy mogą korzystać.<br><br>Nie wprowadzaj klasy bazowej wyłącznie w celu współdzielenia kodu. Unikaj rozbudowanych hierarchii dziedziczenia. Traktuj dziedziczenie jako wyjątek uzasadniony wymaganiami technologii lub rzeczywistą relacją typów, w której podklasa zachowuje kontrakt klasy bazowej. |
| Ekstrakcja powinna ułatwiać zrozumienie kodu | Wydzielaj fragment do osobnej funkcji, klasy lub komponentu, gdy reprezentuje sensowne zadanie, ukrywa szczegóły utrudniające czytanie albo usuwa powtarzającą się logikę. Dobieraj formę wydzielonego elementu do jego odpowiedzialności i konwencji technologii.<br><br>Nazwa wydzielonego elementu powinna wyrażać znaczenie tego fragmentu. Unikaj rozdrabniania kodu, które zmusza do ciągłego przechodzenia między elementami bez poprawy czytelności. |
| Wydzielaj małe elementy do ponownego użycia | Gdy ten sam kod realizuje tę samą odpowiedzialność w kilku miejscach, wydziel go do małej funkcji, klasy lub komponentu o jasno określonym zadaniu. Wspólny element powinien przyjmować potrzebne dane i zależności wprost, bez uzależniania się od szczegółów swoich użytkowników.<br><br>Współdziel logikę o tym samym znaczeniu. Samo podobieństwo zapisu nie wystarcza do stworzenia wspólnej abstrakcji, jeśli fragmenty realizują różne reguły i mogą zmieniać się niezależnie. Unikaj uniwersalnych klas pomocniczych zbierających niepowiązane zadania. |

## 3. Czytelność i intencja

| Zasada | Jak stosować |
| --- | --- |
| Nazwy powinny wyrażać intencję | Dobieraj nazwy funkcji, klas, komponentów, zmiennych i pozostałych typów tak, aby jasno określały ich rolę. Preferuj słownictwo związane z rozwiązywanym problemem. Unikaj ogólnych nazw takich jak `process`, `handle` czy `data`, jeśli kontekst nie nadaje im jednoznacznego znaczenia. |
| Proste nazewnictwo | Używaj prostych, zrozumiałych słów i możliwie krótkich nazw, które pozostają jednoznaczne w danym kontekście. Unikaj nieoczywistych skrótów, zbędnych słów i powtarzania informacji wynikających z otoczenia. Dłuższa, czytelna nazwa jest lepsza niż krótki, niezrozumiały skrót. |
| Komentarze powinny wyjaśniać powód | Komentarze powinny opisywać powody decyzji, ograniczenia, nietypowe założenia i istotne kompromisy.<br><br>Nie powtarzaj komentarzem tego, co wynika wprost z kodu. Jeśli komentarz jest potrzebny do wyjaśnienia podstawowego zadania funkcji, klasy lub komponentu, najpierw rozważ poprawę nazwy lub struktury.<br><br>Przykład wartościowego komentarza: „Ponawiamy tylko odczyt, ponieważ ponowienie zapisu mogłoby utworzyć drugie zamówienie”. |

## 4. Projektowanie oparte na domenie (DDD)

| Zasada | Jak stosować |
| --- | --- |
| Wyraźny bounded context | Określ granice każdego modelu domenowego: obszar, w którym pojęcia i reguły mają jednoznaczne znaczenie. |
| Małe, spójne domeny | Dziel system na możliwie małe obszary domenowe o jednej spójnej odpowiedzialności. Zachowuj razem pojęcia i reguły, które są ze sobą ściśle związane. |
| Hermetyzacja domeny | Ukrywaj wewnętrzne modele, stan i sposób zapisu danych. Na zewnątrz udostępniaj tylko potrzebne dane i operacje przez jawny kontrakt, bez możliwości bezpośredniej zmiany wnętrza domeny. |
| Wspólny język domeny | Używaj w kodzie tych samych pojęć co w wymaganiach i rozmowach o domenie. W obrębie kontekstu jedno pojęcie powinno mieć jedną nazwę i spójne znaczenie. |
| Reguły biznesowe w domenie | Umieszczaj reguły biznesowe w domenie i egzekwuj je przy zmianach stanu. Ich poprawność musi być zachowana niezależnie od tego, kto wywołuje operację. |
| Domena niezależna od technologii | Reguły biznesowe powinny działać niezależnie od interfejsu użytkownika, bazy danych i zewnętrznych usług. Kod obsługujący te technologie korzysta z domeny przez jej kontrakt. |

## 5. Pisanie testów

| Zasada | Jak stosować |
| --- | --- |
| Proste nazwy testów | Nazywaj testy prostym zdaniem opisującym scenariusz i oczekiwany wynik, np. „odrzuca zamówienie z pustym koszykiem”. |
| Czytelny podział testu | Wyraźnie oddziel przygotowanie danych, wykonanie operacji i sprawdzenie wyniku (Arrange–Act–Assert), np. pustymi wierszami. |
| Testowanie kontraktu (black-box) | Sprawdzaj publicznie obserwowalne zachowanie i efekty. Unikaj zależności od prywatnych metod, wewnętrznej struktury i kolejności wywołań. Zmiana implementacji przy zachowanym kontrakcie nie powinna wymagać zmiany testów. |
| Preferowanie wyższego poziomu | Testuj scenariusze przez publiczne wejście modułu, komponentu lub domeny. Dobieraj zakres do sprawdzanego kontraktu; unikaj osobnego testowania każdego wewnętrznego elementu. |
| Testy domeny | Reguły domenowe testuj jednostkowo przez publiczny kontrakt domeny, używając rzeczywistych obiektów domenowych. Takie testy powinny działać bez uruchamiania infrastruktury. |
| Testy integracji z infrastrukturą | Kod współpracujący z bazą danych, Kafką lub podobną usługą testuj z rzeczywistą technologią w izolowanym środowisku testowym. Preferuj uruchamianie tych zależności w kontenerach. |
| Jak najmniej moków | Preferuj rzeczywiste współpracujące elementy. Moki stosuj tylko tam, gdzie uruchomienie rzeczywistej zależności w teście jest niepraktyczne. Moki nie zastępują sprawdzenia integracji, której poprawność test ma potwierdzić. |
