#ID="524" TOKEN="BAhJIiU5YWNmNTY5ZTczMjliYzZlMDUzYzE0N2MyNTZlZWMxNQY6BkVG--5959edd87fb54a1f2812a3504f846d2c4486b7aa" sh assets/scripts/sign-out.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
