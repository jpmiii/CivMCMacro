
const p = Player.getPlayer() ;
var inv = Player.openInventory();
const lagTick = 6; // Edit this depending on your internet connection

Client.waitTick(lagTick);
p.interact();
Client.waitTick(lagTick);
inv = Player.openInventory();
Client.waitTick(lagTick);
for (slot=0;slot<36;slot++) {
    if (inv.getSlot(slot).getItemID() != `minecraft:bucket`) {
    Client.waitTick(1);
        inv.swap(slot,slot+54);
    }
}
Chat.log("swap");