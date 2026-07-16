# WAT Project

Workflows, Agents, Tools. Probabilistic AI reasons; deterministic code executes.

## Layout
```
.tmp/           # Disposable intermediates (gitignored)
tools/          # Python execution scripts
workflows/      # Markdown SOPs
.env            # Secrets (gitignored) — copy from .env.example
```

## Setup
```
python -m venv .venv
.venv\Scripts\activate        # Windows
pip install -r requirements.txt
copy .env.example .env         # then fill values
```

## How it works
- **Workflows** (`workflows/*.md`) define objective, inputs, tools, outputs, edge cases.
- **Agent** reads workflow, sequences tools, handles failures.
- **Tools** (`tools/*.py`) do the deterministic work. Import helpers from `tools/_shared.py`.

New workflow: copy `workflows/_template.md`. New tool: import `_shared`, read secrets via `require_env`.
