
while true
do
    curl "127.0.0.1:8082/lines/$(( ( RANDOM % 10000 )  + 1 ))";
done