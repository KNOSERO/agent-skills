# Flow: Implementation plan

Ten flow tworzy **przenośną instrukcję implementacyjną** z ustalonego stanu
bieżącej sesji. Nie analizuje problemu od początku i niczego nie implementuje.

## Cel i ręczne uruchomienie

Uruchom go tylko, gdy użytkownik wprost chce przenieść ustaloną pracę do nowego
kontekstu, na przykład przez /cube:implementation-plan.

~~~text
CURRENT SESSION
→ EXTRACT ESTABLISHED STATE
→ REMOVE IRRELEVANT HISTORY
→ FILL ONLY REQUIRED DISCOVERABLE GAPS
→ BUILD PORTABLE IMPLEMENTATION INSTRUCTION
→ COPYABLE PROMPT
→ READY_FOR_TRANSFER
~~~

Nie uruchamiaj tego flow automatycznie z problem-solving, fix-me, AGENTS.md ani
innego flow. Nie jest to wewnętrzny planner wykonania.

## Granica odpowiedzialności

~~~text
problem-solving = THINK
implementation-plan = TRANSFER
fix-me = EXECUTE
~~~

context-state utrzymuje zwarty kanoniczny stan. implementation-plan
przekształca go, wraz z potrzebnym established context z rozmowy, w końcowy
prompt do skopiowania. Nie przejmuje własności stanu i nie tworzy transcript
summary.

## Wejścia

Wykorzystaj przede wszystkim bieżącą rozmowę i już istniejące artefakty stanu:

1. confirmed problem, goal, requirements i solution;
2. decyzje użytkownika i techniczne, constraints, non-goals oraz business rules;
3. Execution Handoff, checkpointy, evidence pointers i znaną wiedzę o projekcie;
4. znalezione obszary, pliki, moduły, klasy, endpointy, schematy, testy oraz ryzyka.

Redukuj je w modelu:

~~~text
history
→ established state
→ minimum complete implementation context
~~~

Usuń small talk, powtórzenia, surowe logi, pełne cytaty dokumentacji, długie
reasoning history, stare hipotezy i odrzucone opcje, które nie chronią wykonania
przed powtórzeniem istotnej decyzji.

## Minimalne uzupełnienie evidence

Nie badaj ponownie tego, co sesja już ustaliła. Gdy brakuje faktu niezbędnego
do bezpiecznej instrukcji i można go łatwo odkryć w projekcie, użyj
token-efficient-retrieval i pobierz tylko minimalne potrzebne evidence.

| Brak | Działanie |
| --- | --- |
| Fakt możliwy do odkrycia | Ustal go minimalnym evidence. |
| Mały detal wykonawczy | Pozostaw lokalnej decyzji wykonawcy. |
| Potwierdzona decyzja | Zachowaj jako established context. |
| Materialna nierozstrzygnięta decyzja | Oznacz ją jasno jako blocker/open decision. |

Nie uruchamiaj pełnego problem-solving tylko dlatego, że widzisz lukę. Celem
flow jest transfer stanu, a nie ponowna analiza.

## Konstrukcja promptu

Normalny wynik to **jeden** Markdown code block zawierający samodzielny prompt.
Nie dodawaj drugiej wersji dla innego produktu, komentarza przed ani po bloku
ani pustego boilerplate. Pomijaj puste sekcje.

Prompt ma zaczynać się od polecenia implementacji i zawierać, gdy są potrzebne:

~~~text
Goal
Context
Confirmed decisions
Scope
Non-goals
Required changes
Relevant project areas
Constraints and business rules
Acceptance criteria
Verification
Known risks or blockers
Execution rules
~~~

W sekcji Execution rules zawsze przekaż następujące zasady:

- Traktuj confirmed decisions jako ustalony kontekst.
- Nie wznawiaj analizy problemu ani nie otwieraj decyzji bez bezpośrednio sprzecznego evidence.
- Zbadaj tylko minimalny kontekst projektu potrzebny do wykonania.
- Odkrywaj fakty dostępne w projekcie zamiast pytać o nie użytkownika.
- Podejmuj lokalnie małe decyzje wykonawcze.
- Pytaj tylko o materialne nierozstrzygnięte decyzje.
- Wykonaj cały wymagany zakres, w tym wymagane testy, dokumentację i konfigurację.
- Zweryfikuj rezultat i popraw regresje spowodowane implementacją.
- Nie wykonuj niepowiązanych porządków.
- Zakończ zwięzłym raportem wykonania i weryfikacji.

Jeżeli docelowy projekt ma framework skillów, prompt może nakazać respektowanie
lokalnego AGENTS.md i użycie właściwego execution flow. Nie może jednak wymagać
historii tej sesji ani kopiować całych SKILL.md.

## Wynik i zakończenie

Flow kończy się jako READY_FOR_TRANSFER, gdy powstał samodzielny prompt, który
mówi nowemu agentowi:

~~~text
WHAT
WHY
WHERE
CONSTRAINTS
WHAT IS ALREADY DECIDED
WHAT MUST CHANGE
HOW TO VERIFY
WHEN IT IS DONE
~~~

Nie kończy się jako IMPLEMENTED. Gdy istnieje materialny blocker, zachowaj go
wyraźnie w promptcie zamiast go wymyślać lub ukrywać.
