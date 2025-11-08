#!/bin/bash
cd /home/mateo/RIVAMEZ/rivamez
git add -A
git commit -F commit-message.txt
rm commit-message.txt
git push origin main
