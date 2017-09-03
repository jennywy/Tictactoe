# TOKEN="BAhJIiU4MTg3ZDlhZjI0NjZkOTI5YTdhNjY3ZDFjMTAwZDI2NwY6BkVG--4d9d5dfde2c2e7f2ec7a4b226de67e5561387130" sh assets/scripts/index.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games[?over=]"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"
