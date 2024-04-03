const item=extend(ItemSource,"item", {
update(){
this.health = Number.MAX_VALUE
}
});
item.update = true;
item.itemCapacity=100;