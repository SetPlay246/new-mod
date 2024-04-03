const liquid=extend(LiquidSource,"liquid", {
update(tile){
tile.entity.health = Number.MAX_VALUE
this.super$update(tile)
}
});
liquid.liquidCapacity = 100;
;