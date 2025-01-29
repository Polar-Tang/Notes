Llinux have a RPGN, with a pool of entropy based in the mouse, keyboard, and the timing of interrumpted processed you can find in the /dev/random file and read it with /proc/sys/kernel/random/entropy_avail , here's is a script to read it:
```sh
#!/bin/sh
ESTIMATE=/proc/sys/kernel/random/entropy_avail
timeout 3s dd if=/dev/random bs=4k count=1 2> /dev/null | base64
ent=`cat $ESTIMATE`
while [ $ent -lt 128 ]
do
sleep 3
ent=`cat $ESTIMATE`
echo $ent
done
dd if=/dev/random bs=8 count=1 2> /dev/null | base64
cat $ESTIMATE
```