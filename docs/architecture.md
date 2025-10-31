# Architecture & Team Flow
- FE calls BE via `/recommend`, `/chat`, `/translate` using fetch().
- Each service is isolated in `backend/services/*` to allow parallel work.
- Data in `backend/data` and constants in `backend/config.py`.
- API is the single source of truth (see docs/api.md).
