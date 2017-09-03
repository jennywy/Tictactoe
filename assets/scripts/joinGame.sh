# ID="524" TOKEN="BAhJIiU2ODg1ZDA5Y2MxMjcwOGFhZmVkNGE4NzQwYmY4ZTQ1MwY6BkVG--9b6baffbaa03656f52e6c2ba0c0d81e04ee73fa5 " sh assets/scripts/joinGame.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"
