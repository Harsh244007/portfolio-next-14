if [[ -n "$1" ]]; then
commitMessage="$1"
else
read -p "Enter the commit message: " commitMessage
fi

for (( i=2; i<=$#; i++ )); do
commitMessage="$commitMessage ${!i}"
done
git pull 
git add .
git commit -m "* ${commitMessage^} ."
git push

echo "Successfully committed with this message: ${commitMessage^}"
