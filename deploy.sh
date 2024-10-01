#!/usr/bin/env sh

# aborta em caso de erros
set -e

# cria o build
npm run build

# navega para o diretório de saída do build
cd dist

# inicializa um novo repositório git e faz commit
git init
git add -A
git commit -m 'deploy'

# define a branch como gh-pages
git branch -M gh-pages

# configura o repositório remoto e empurra as mudanças
git push -f git@github.com:tiagobpires/neps_frontend_course.git master:gh-pages

# volta para o diretório anterior
cd -