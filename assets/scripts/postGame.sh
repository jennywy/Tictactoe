<<<<<<< HEAD
# TOKEN="BAhJIiUwOWI3NGE3OTE2OGUzOTRkNDJhOTA1ODIwM2MxMzgzNQY6BkVG--3357e213e4129df650d1ea50c807146124bfcb26" sh assets/scripts/postGame.sh
=======
# TOKEN="BAhJIiU5YWNmNTY5ZTczMjliYzZlMDUzYzE0N2MyNTZlZWMxNQY6BkVG--5959edd87fb54a1f2812a3504f846d2c4486b7aa" sh assets/scripts/postGame.sh
>>>>>>> master

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"
