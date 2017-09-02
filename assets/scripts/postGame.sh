# TOKEN="BAhJIiUwOWI3NGE3OTE2OGUzOTRkNDJhOTA1ODIwM2MxMzgzNQY6BkVG--3357e213e4129df650d1ea50c807146124bfcb26" sh assets/scripts/postGame.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"
