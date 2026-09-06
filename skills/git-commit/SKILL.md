---
name: git-commit
description: Podziel niezatwierdzone zmiany w repozytorium Git na logiczne commity i utwórz je z nazwami zgodnymi ze standardem Conventional Commits.
---

# Commitowanie zmian w Git — wersja robocza

## 1. Cel i standard

Stosuj standard **Conventional Commits 1.0.0**. Podstawowy format wiadomości to:

```text
<type>(<scope>): <description>
```

`scope` jest opcjonalny. Opis powinien być krótki, jednoznaczny i napisany w trybie rozkazującym. Typy commitów zapisuj po angielsku, aby format był rozpoznawalny przez narzędzia i inne osoby pracujące z repozytorium.

| Typ | Stosuj, gdy |
| --- | --- |
| `feat` | Dodajesz nową funkcję lub możliwość. |
| `fix` | Naprawiasz błąd w istniejącym zachowaniu. |
| `refactor` | Zmieniasz strukturę kodu bez zmiany zachowania. |
| `perf` | Poprawiasz wydajność bez zmiany kontraktu. |
| `test` | Dodajesz lub zmieniasz testy bez zmiany kodu produkcyjnego. |
| `docs` | Zmieniasz dokumentację. |
| `build` | Zmieniasz zależności albo proces budowania. |
| `ci` | Zmieniasz konfigurację ciągłej integracji lub automatyzacji. |
| `chore` | Wykonujesz pozostałą techniczną pracę utrzymaniową. |
| `revert` | Cofasz wcześniejszy commit. |

Zmianę łamiącą kompatybilność oznacz przez `!`, na przykład `feat(api)!: change response shape`, oraz opisz ją w stopce `BREAKING CHANGE:`. Nie używaj `feat` lub `fix` wyłącznie jako ogólnych określeń każdej zmiany.

## 2. Zasady podziału zmian

- Jeden commit powinien przedstawiać jedną logiczną zmianę, którą można osobno przeczytać, przetestować i cofnąć.
- Nie łącz w jednym commicie niezależnej funkcji, refaktoryzacji, formatowania i aktualizacji dokumentacji.
- Zmiany wymagane razem do uruchomienia powinny pozostać w jednym commicie albo mieć jasno określoną kolejność.
- Testy dotyczące konkretnej zmiany dołącz do tego commitu, chyba że repozytorium ma inną ustaloną konwencję.
- Zachowaj istniejące, niepowiązane zmiany użytkownika. Nie usuwaj ich, nie nadpisuj i nie dodawaj do commita bez wyraźnego zakresu.
- Nie twórz pustych commitów.

## 3. Etapy pracy

| Etap | Jak postępować |
| --- | --- |
| Rozpoznanie | Sprawdź `git status`, różnice względem indeksu i różnice staged. Ustal aktualną gałąź oraz istniejące zasady repozytorium, na przykład `CONTRIBUTING.md` lub konfigurację commitlint. |
| Klasyfikacja | Przypisz każdą zmianę do logicznej grupy i typu Conventional Commits. Jeśli jedna zmiana miesza kilka odpowiedzialności, zaplanuj jej rozdzielenie. |
| Plan | Przedstaw kolejność commitów, zakres plików lub hunks oraz proponowaną wiadomość dla każdego commita. Wyjaśnij zależności między nimi. |
| Wybór | Przed pierwszym commitem zaczekaj na wybór użytkownika, jeśli nie określił już zakresu i zgody na utworzenie commitów. Przyjmuj identyfikatory `T1`, `T2`, `T3` dla grup, aby można było wybrać dowolny zestaw. |
| Przygotowanie | Dodawaj do indeksu tylko elementy należące do wybranej grupy. Używaj selektywnego stagingu, gdy plik zawiera niezależne zmiany. |
| Weryfikacja | Przed commitem sprawdź staged diff, `git diff --cached --check` oraz odpowiednie testy lub lint. Upewnij się, że commit nie zawiera sekretów, plików tymczasowych ani niepowiązanych zmian. |
| Commit | Utwórz commit z ustaloną wiadomością. Po każdym commicie sprawdź jego zawartość i status repozytorium, a następnie przejdź do kolejnej grupy. |
| Podsumowanie | Podaj utworzone identyfikatory commitów, ich wiadomości, zakres oraz wyniki weryfikacji. Wskaż zmiany, które pozostały niezatwierdzone. |

Nie używaj `git reset --hard`, `git clean`, `commit --amend`, rebase ani force push, chyba że użytkownik wyraźnie o to poprosi. Samo tworzenie commitów nie upoważnia do publikowania ich na zdalnym repozytorium.

## 4. Format planu

Przedstaw plan w poniższym układzie:

| ID | Kolejność | Typ i scope | Zakres zmian | Wiadomość commita | Zależności | Weryfikacja |
| --- | --- | --- | --- | --- | --- | --- |

Przykłady poprawnych wiadomości:

```text
feat(auth): add refresh token rotation
fix(parser): reject malformed headers
refactor(order): extract pricing policy
test(order): cover cancellation contract
docs: describe local development setup
```

## 5. Ochrona zakresu i historii

Przed stagingiem sprawdź, czy w repozytorium nie ma sekretów, kluczy, tokenów, haseł ani danych, których nie powinno się zatwierdzać. Jeśli je znajdziesz, zatrzymaj commitowanie i wskaż problem.

Nie zmieniaj historii już opublikowanych commitów bez wyraźnej prośby. Jeśli wiadomość lub podział wymaga poprawy przed utworzeniem commita, popraw staged changes i plan zamiast tworzyć tymczasowe commity.
