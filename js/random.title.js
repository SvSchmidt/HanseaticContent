/**
Random title generator from http://mdbenoit.com/rtg.htm (copyright belongs to the author)
*/

var noun = new Array(
"Dream","Dreamer","Dreams","Waves",
"Sword","Kiss","Sex","Lover",
"Slave","Slaves","Pleasure","Servant",
"Servants","Snake","Soul","Touch",
"Men","Women","Gift","Scent",
"Ice","Snow","Night","Silk","Secret","Secrets",
"Game","Fire","Flame","Flames",
"Husband","Wife","Man","Woman","Boy","Girl",
"Truth","Edge","Boyfriend","Girlfriend",
"Body","Captive","Male","Wave","Predator",
"Female","Healer","Trainer","Teacher",
"Hunter","Obsession","Hustler","Consort",
"Dream", "Dreamer", "Dreams","Rainbow",
"Dreaming","Flight","Flying","Soaring",
"Wings","Mist","Sky","Wind",
"Winter","Misty","River","Door",
"Gate","Cloud","Fairy","Dragon",
"End","Blade","Beginning","Tale",
"Tales","Emperor","Prince","Princess",
"Willow","Birch","Petals","Destiny",
"Theft","Thief","Legend","Prophecy",
"Spark","Sparks","Stream","Streams","Waves",
"Sword","Darkness","Swords","Silence","Kiss",
"Butterfly","Shadow","Ring","Rings","Emerald",
"Storm","Storms","Mists","World","Worlds",
"Alien","Lord","Lords","Ship","Ships","Star",
"Stars","Force","Visions","Vision","Magic",
"Wizards","Wizard","Heart","Heat","Twins",
"Twilight","Moon","Moons","Planet","Shores",
"Pirates","Courage","Time","Academy",
"School","Rose","Roses","Stone","Stones",
"Sorcerer","Shard","Shards","Slave","Slaves",
"Servant","Servants","Serpent","Serpents",
"Snake","Soul","Souls","Savior","Spirit",
"Spirits","Voyage","Voyages","Voyager","Voyagers",
"Return","Legacy","Birth","Healer","Healing",
"Year","Years","Death","Dying","Luck","Elves",
"Tears","Touch","Son","Sons","Child","Children",
"Illusion","Sliver","Destruction","Crying","Weeping",
"Gift","Word","Words","Thought","Thoughts","Scent",
"Ice","Snow","Night","Silk","Guardian","Angel",
"Angels","Secret","Secrets","Search","Eye","Eyes",
"Danger","Game","Fire","Flame","Flames","Bride",
"Husband","Wife","Time","Flower","Flowers",
"Light","Lights","Door","Doors","Window","Windows",
"Bridge","Bridges","Ashes","Memory","Thorn",
"Thorns","Name","Names","Future","Past",
"History","Something","Nothing","Someone",
"Nobody","Person","Man","Woman","Boy","Girl",
"Way","Mage","Witch","Witches","Lover",
"Tower","Valley","Abyss","Hunter",
"Truth","Edge"
)

var adjective = new Array(
"Lost","Only","Last","First",
"Third","Sacred","Bold","Lovely",
"Final","Missing","Shadowy","Seventh",
"Dwindling","Missing","Absent",
"Vacant","Cold","Hot","Burning","Forgotten",
"Weeping","Dying","Lonely","Silent",
"Laughing","Whispering","Forgotten","Smooth",
"Silken","Rough","Frozen","Wild",
"Trembling","Fallen","Ragged","Broken",
"Cracked","Splintered","Slithering","Silky",
"Wet","Magnificent","Luscious","Swollen",
"Erect","Bare","Naked","Stripped",
"Captured","Stolen","Sucking","Licking",
"Growing","Kissing","Green","Red","Blue",
"Azure","Rising","Falling","Elemental",
"Bound","Prized","Obsessed","Unwilling",
"Hard","Eager","Ravaged","Sleeping",
"Wanton","Professional","Willing","Devoted",
"Misty","Lost","Only","Last","First",
"Final","Missing","Shadowy","Seventh",
"Dark","Darkest","Silver","Silvery","Living",
"Black","White","Hidden","Entwined","Invisible",
"Next","Seventh","Red","Green","Blue",
"Purple","Grey","Bloody","Emerald","Diamond",
"Frozen","Sharp","Delicious","Dangerous",
"Deep","Twinkling","Dwindling","Missing","Absent",
"Vacant","Cold","Hot","Burning","Forgotten",
"Some","No","All","Every","Each","Which","What",
"Playful","Silent","Weeping","Dying","Lonely","Silent",
"Laughing","Whispering","Forgotten","Smooth","Silken",
"Rough","Frozen","Wild","Trembling","Fallen",
"Ragged","Broken","Cracked","Splintered"
)


var a = 0;
var b = 0;
function RandomTitle1(nameform) {
a = Math.floor(Math.random() * noun.length);
b = Math.floor(Math.random() * adjective.length);
return adjective[b] + " " + noun[a]
}

var c = 0;
var d = 0;
function RandomTitle2(nameform) {
c = Math.floor(Math.random() * adjective.length);
d = Math.floor(Math.random() * noun.length);
return "The " + adjective[c] + " " + noun[d]
}

var e = 0;
var f = 0;
function RandomTitle3(nameform) {
e = Math.floor(Math.random() * noun.length);
f = Math.floor(Math.random() * noun.length);
return noun[f] + " of " + noun[e]
}

var g = 0;
var h = 0;
function RandomTitle4(nameform) {
g = Math.floor(Math.random() * noun.length);
h = Math.floor(Math.random() * noun.length);
return "The " + noun[g] + "'s " + noun[h]
}

var i = 0;
var j = 0;
function RandomTitle5(nameform) {
i = Math.floor(Math.random() * noun.length);
j = Math.floor(Math.random() * noun.length);
return "The " + noun[i] + " of the " + noun[j]
}

var k = 0;
var l = 0;
function RandomTitle6(nameform) {
k = Math.floor(Math.random() * noun.length);
l = Math.floor(Math.random() * noun.length);
return noun[k] + " in the " + noun[l]
}
