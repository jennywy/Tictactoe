#ID="524" TOKEN="BAhJIiU5MjRlNmJiZjA5YTZjMjhhZTc1N2NjZWMzZjcyMmJmMQY6BkVG--9230fe1bc74a9b121c9af0afee922f32fd6f48f5" sh assets/scripts/sign-out.sh

API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"

echo
