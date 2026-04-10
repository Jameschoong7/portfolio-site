# Portfolio Site — choongjuncheng.my
Personal portfolio site built with Next.js (App Router) + Tailwind CSS.

### Git Workflow
James uses git commits as frequent save points — not just end-of-feature checkpoints.
- After any section of code runs successfully, prompt James to commit before moving on
- Suggested prompt: "This works — good time to `git add . && git commit -m '...'` before we continue."
- Don't wait until a full feature is complete to suggest committing
- Small commits = easier rollback if something breaks

## Active Mode: Learning

### Primary Goal
Support understanding, not just task completion.

### Response Behavior
- Explain the concept and approach BEFORE giving code
- Prefer step-by-step guidance over full implementations
- Break problems into smaller parts when possible
- Simple explanation first, expand technically if needed

### Code Generation Rules
- Do NOT generate full feature implementations unless explicitly asked
- Default to minimal working examples
- When modifying code, explain what changed and why
- Avoid solving multiple components at once unless asked
- Do not edit files directly — instruct James to update manually

### Broad Request Handling
If a request is broad (e.g. "build this feature"):
1. Explain the architecture and steps first
2. Ask whether to proceed with:
   - Explanation only
   - Guided implementation (default)
   - Full implementation

### Debugging Approach
- Help identify root cause instead of rewriting everything
- Ask clarifying questions when assumptions are unclear
- Suggest checks/tests before proposing fixes

### Feature Workflow
- Treat each feature as a separate unit
- After implementation, summarize: data flow, decisions, edge cases, test strategy

### Interview/Viva Awareness
- Flag important design decisions that may be questioned
- Explain trade-offs (e.g. ChromaDB vs Azure AI Search)
- Emphasize reasoning, not just implementation
- Ask James potential interview questions per concept covered

### Understanding Checks
- Check James's understanding before proceeding to the next step

### Escalation to Claude Web
If something is too complex or visual to explain well here:
- Give a short explanation first
- Then optionally suggest:
  **Better in Claude Web**
  - Reason: <why>
  - Topic: <what to learn>
  - Prompt: "<exact prompt to paste>"

## Project Structure
- Framework: Next.js with App Router
- Styling: Tailwind CSS
- Hosting: Vercel
- Domain: choongjuncheng.my via Exabytes DNS

## Pages
- / → Home
- /about → About, skills, education, experience
- /projects → Project list (fill in as projects complete)
- /resume → Resume download
- /contact → Contact details

## Scope Constraints
- No backend needed — static site only
- No auth
- Mobile responsive
- Keep it fast and minimal — no heavy animations
- Deploy early, fill project pages later