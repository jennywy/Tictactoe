# TOKEN="BAhJIiU5YWNmNTY5ZTczMjliYzZlMDUzYzE0N2MyNTZlZWMxNQY6BkVG--5959edd87fb54a1f2812a3504f846d2c4486b7aa" sh assets/scripts/postGame.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}"
