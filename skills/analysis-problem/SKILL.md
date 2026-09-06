---
name: analysis-problem
description: Analizuj problem, zbieraj brakujące informacje, sprawdzaj wpływ na istniejące moduły i przedstawiaj możliwą realizację jako dokument Markdown w czacie.
---

# Analiza problemu

## 1. Cel i granice

Analizuj problem przed rozpoczęciem implementacji. Ustal, co ma zostać osiągnięte, jakie jest obecne zachowanie, jakie ograniczenia obowiązują oraz które elementy repozytorium mogą zostać dotknięte zmianą.

Skill działa tylko do odczytu. Nie edytuj kodu, nie twórz ani nie aktualizuj plików dokumentacji, nie wykonuj refaktoryzacji i nie twórz commitów. Końcowym wynikiem jest dokument Markdown zwrócony bezpośrednio w czacie.

Korzystaj z dwóch skilli zależnie od potrzeb:

- `documentation-guidelines` określa sposób organizacji, język, czytelność i diagramy dokumentu wynikowego,
- `code-analysis` służy do analizy istniejących modułów objętych wpływem problemu.

Nie kopiuj zasad tych skilli. Zastosuj je w odpowiednim miejscu przepływu analizy.

## 2. Rozpoznanie problemu

Najpierw odczytaj opis problemu, oczekiwany rezultat, obecne zachowanie, ograniczenia i kryteria akceptacji. Następnie sprawdź dostępne źródła w repozytorium: dokumentację, README, konfigurację, testy, wskazane pliki oraz miejsca użycia powiązanych elementów.

Ustal:

- jaki problem ma zostać rozwiązany i dla kogo,
- co ma pozostać bez zmian,
- jakie dane, wejścia, wyjścia i efekty uboczne są związane z problemem,
- czy podobna funkcja lub moduł już istnieje,
- które moduły mogą zostać wykorzystane, rozszerzone albo zmienione,
- czy zmiana narusza istniejące kontrakty, przepływy lub granice modułów.

## 3. Brakujące informacje

Po wstępnym rozpoznaniu sprawdź, czy można bezpiecznie przejść do analizy rozwiązania. Jeśli brakuje informacji wymaganych do podjęcia decyzji, zadaj jedną skonsolidowaną, numerowaną listę pytań.

Każde pytanie oznacz jako:

- **wymagane** — bez odpowiedzi nie można wiarygodnie opisać rozwiązania,
- **opcjonalne** — odpowiedź poprawi szczegółowość propozycji, ale nie blokuje dalszej pracy.

Przy każdym pytaniu wyjaśnij krótko, dlaczego informacja jest potrzebna. Nie powtarzaj pytań, na które odpowiedź wynika z repozytorium. Po zadaniu pytań wymaganych wstrzymaj przygotowanie propozycji i poczekaj na odpowiedź użytkownika. Nie zastępuj brakujących danych domysłami.

## 4. Analiza wpływu na moduły

Określ wpływ zmiany na podstawie jej zależności z istniejącą strukturą:

| Sytuacja | Działanie |
| --- | --- |
| Zmiana nie dotyka istniejącego kodu | Opisz zakres nowego elementu i jego kontrakty bez uruchamiania analizy istniejącego modułu. |
| Zmiana wykorzystuje istniejący moduł | Przeanalizuj ten moduł, jego bezpośrednie użycia, zależności, testy i kontrakt przez `code-analysis`. |
| Zmiana wymaga edycji istniejącego modułu | Przeanalizuj moduł przed opisaniem zmiany przez `code-analysis`; uwzględnij wpływ na jego callerów i testy. |
| Zmiana wpływa na strukturę lub przepływ kilku modułów | Przeanalizuj każdy bezpośrednio dotknięty moduł przez `code-analysis` i opisz zależności między ustaleniami. |

Domyślnie analizuj bezpośrednio dotknięte moduły, ich bezpośrednich callerów, zależności i testy. Rozszerz zakres tylko wtedy, gdy bezpośredni kontekst nie wystarcza do potwierdzenia wpływu. Oddzielaj fakty potwierdzone w kodzie od założeń i pytań otwartych.

## 5. Możliwe sposoby realizacji

Na podstawie rozpoznania i analizy modułów opracuj możliwe sposoby realizacji zmiany. Dla każdego istotnego wariantu opisz:

- sposób działania i granice rozwiązania,
- moduły nowe, wykorzystywane lub edytowane,
- wpływ na istniejące kontrakty i przepływy,
- zależności oraz wymagane zmiany w testach,
- ryzyka, koszty i ograniczenia.

Wskaż jedno rekomendowane rozwiązanie. Jeśli istnieją sensowne alternatywy, przedstaw je krótko wraz z najważniejszymi kompromisami. Nie implementuj żadnego wariantu i nie przedstawiaj propozycji jako wykonanej zmiany.

## 6. Dokument wynikowy

Po zebraniu wymaganych informacji i zakończeniu analizy przygotuj dokumentację problemu zgodnie z aktualnie wczytanym `documentation-guidelines`. Skill dokumentacyjny określa strukturę, kolejność, styl, język i sposób użycia diagramów; `analysis-problem` dostarcza treść wynikającą z rozpoznania problemu.

W dokumencie przedstaw naturalny przebieg od problemu do rekomendowanej zmiany. Uwzględnij ustalenia analizy modułów, wykorzystanie istniejących elementów, moduły wymagające edycji, warianty realizacji, rekomendację, ryzyka i otwarte pytania. Jeśli przepływ zmiany jest istotny, dodaj diagram zgodnie z zasadami `documentation-guidelines`.

Zwróć dokument bezpośrednio w czacie jako Markdown. Nie zapisuj go w repozytorium i nie twórz pliku `.md`.

## 7. Kontrola przed odpowiedzią

Przed przedstawieniem dokumentu sprawdź:

- czy cel, obecne zachowanie, ograniczenia i kryteria akceptacji są opisane,
- czy wszystkie wymagane pytania zostały zadane przed przygotowaniem propozycji,
- czy każdy dotknięty istniejący moduł został przeanalizowany przez `code-analysis`,
- czy rozróżniono moduły wykorzystywane, edytowane i nowe,
- czy rekomendacja wynika z analizy, a alternatywy mają opisane kompromisy,
- czy dokument stosuje aktualne zasady `documentation-guidelines`,
- czy nie przedstawiono niepotwierdzonych założeń jako faktów,
- czy nie zmodyfikowano żadnego pliku w repozytorium.

Na końcu wskaż informacje niepotwierdzone oraz zakres przeprowadzonej analizy.
