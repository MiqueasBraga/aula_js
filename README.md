# Git

## 1 - Configuraçao do usuario das alteraçoes

## 1.1 setando o nome

```js
git config --global user.name "fulano de tal"
```
### 1.2 Setando o e mail

```js
git config --global use.email "fulano de tal@exemplo.com.br"git 
```

## Subir alteração para o repositório remoto

### 1 -verificar as alteraçoes

```
git status
```
### 2 - Adicionar as alterações que serão enviadas
```
git add .
```
### 3 conferir as alteraçoes enviadas
```
git status
```
### 4 - Preparar as alteraçoes para serem enviadas
```
git commit -m "comentario"
```
### 5 - Conferir a prepração
```
git status
```
### 6 - Envia as alterações
```
git push
```