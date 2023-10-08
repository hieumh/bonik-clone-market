@echo off
cd "frontend"
start cmd /k "pnpm dev"

cd "../backend/backend_nestjs_bonik_clone"
start cmd /k "pnpm start:dev"

exit