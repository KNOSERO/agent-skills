# Codex Skill

## Key information

The skills in this repository help create, analyze, and organize code and documentation.

To install **all skills**, use Codex with the `skill-installer` skill available and send this prompt:

```text
Install all skills from https://github.com/KNOSERO/codex/tree/master/skills
```

To install a **specific skill**, provide its name and path:

```text
Install the documentation-guidelines skill from https://github.com/KNOSERO/codex/tree/master/skills/documentation-guidelines
```

## Purpose

This guide provides a quick way to install all skills or one selected skill from this repository.

## Flow

1. `skill-installer` downloads the selected skills from the `KNOSERO/codex` repository.
2. It uses the `master` branch and the `skills` directory, or the path of a specific skill.
3. It installs the skills in the user's `.codex/skills` directory.
4. The skills are available in the next Codex turn.

## Details

Source for installing all skills:

`https://github.com/KNOSERO/codex/tree/master/skills`

Source for installing a specific skill:

`https://github.com/KNOSERO/codex/tree/master/skills/documentation-guidelines`

After installation, the selected skill file should be located at:

`%USERPROFILE%\\.codex\\skills\\documentation-guidelines\\SKILL.md`

To verify the installation, display the available skills in Codex and look for the installed skill name.

## Limitations

- Installation requires a working Codex environment and the `skill-installer` skill.
- This guide uses the `master` branch and the `skills` directory.
- Skills are not installed into the project repository.
