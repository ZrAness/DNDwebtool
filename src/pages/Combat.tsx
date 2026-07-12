import './Pages.css'
export default Combat
function Combat() {
    return<>
    <div className="CombatPage">
        <h1>The Combat system</h1>
        <article>
        <h2>Intro</h2>
        <p>Like every dnd combat system including the official dnd system, This home brewed combat system is a turn based fighting system. Before You dive in with the combat system, you should understand basic character stats and attributes.</p>
        <h2>character stats</h2>
        <p>The character has three main bars you should pay attention too, the <span id='health'>Health</span> bar is a quantity that represents the character's life. Basically if it is reduced to 0 the character is dead. The <span id='mana'>Mana</span> bar is a quantity that represents the character's available energy to use magic, without it the character can't use damage\effects magic weapon nor summon magic beasts.
        The <span id='activity'>activity</span> bar represents the character's stamina, it is consumed mainly during traveling and can be regaind by eating food. For more informations check the activity system note shared in discord</p>
        <p>other character attributes are Strength(str),Dexterity(dex),Manipulation(man),Spirituality(spr),Agility(agl) and Charisma(chr).</p>
        <ul>
            <li>
                <h4>Strength:</h4>
                <p>The might of the warrior. A strong fighter can carry and use the heaviest gears efficiently.</p>
            </li>
            <li>
                <h4>Dexterity:</h4>
                <p>The skill of a warrior. It shows how well he can use weapons.</p>
            </li>
            <li>
                <h4>Manipulation:</h4>
                <p>The brilliance of a mage. It refers to the mana manipulation. A professional sorcerer must be an  accurate manipulator.</p>
            </li>
            <li>
                <h4>Spirituality:</h4>
                <p>The soul of a Wiseman. He who has high spirituality has high connection to nature. Weaponless souls use it as their power</p>
            </li>
            <li>
                <h4>Agility:</h4>
                <p>The personal aspect. Charismatic people get respect from the greats, fear from the weak evils and trust from the close allies.</p>
            </li>
            <li>
                <h4>Charisma:</h4>
                <p> Momentum Control, an agile man can react quickly, sneak easily and aim precisely.</p>
            </li>
        </ul>
        <h2>Spin</h2>
        <p>The effectiveness of the character's actions is decided by a random spin wheel numbered from 0 to 20. The spins can be conducted in situations unrelated to the character's action but they aren't obligatory. The narrator will decide wether to spin to determine an outcom based on a random spin or based on infos he already has.<br/>(ex:A character asking if there's a horse in plains. The narrator might have already determined the existance of a horse in those plains using his notes, as well as he might not and in that case he will spin to determine that.)
        <br/>(ex2: a character asking if there's a horse in the middle of the ocean. In this situation, the narrator doesn't need to spin regardless of his preparations because the logical answer is obvious.)</p>
        <p>The spin can get a bonus or a minus based on spin modifiers. The spin modifiers controlled by the player are character's attributes modifiers. Each attribute level results in a certain modifier calculated by the form modifier=integer part of[(attribute level - 4)/2], except 15 that gives +6 instead of the regular +5 according to the equation.
        Another modifier is the story modifier that can be determined by the narrator any time according to the situation and what he thinks should be more often to happen</p>
        <h2>Action points</h2>
        <p>the action points purpose is to determine how many actions the character can perform in one turn in a battle. By default the character has 1.5AP and they reset to 1.5AP every turn start. Once the player's AP are 0, he must end his turn as he can't perform more actions except speaking.</p>
        <p>Most actions consume 0.5 AP except the skills which consume 1 or 1.5 AP. If you want to know how many APs you action is going to consume, feel free to ask the narrator</p>
        <p>Important to mention. If the character's health is below 10% it restore only 0.5AP on the next turn start. if the character's activity is below 30% it restore's 1AP and if it is less then 15% it doesn't restore activity.</p>
        <h2>Skills</h2>
        <p>The skills are the foundemental attack performed by a character. The skills are classified into 3 different types:</p>
        <h4>Normal skills</h4>
        <p>Basic attacks predifined on each weapon. They usually consume 1 AP. the spin modifier used is usually related to the whole weapon but some skills can require their own modifier. Each weapon has 2 normal skills</p>
        <h4>Ultimate skills</h4>
        <p>An ultimate attack predifined on each weapon. usually consumes 1.5AP.</p>
        <h4>Personal skills</h4>
        <p>A skill that isn't predifined on weapons. It can be defined by the player outside of battle. the skill must be logically executable with the weapon. the damage,the spin requierments and anything else related to the skill must be defined with negotiation with the narrator</p>
        <h4>4 skills system</h4>
        <p>In general, each character can perform 2 normal skills, 1 ultimate skill and 1 Personal skill in its turn. this is called the 4 skills system</p>
        <h2>Defence</h2>
        <p>In the opponent turn and after he attacks. you can use the APs you didn't use previously to react to the oppenent. The defence consumes 0.5AP and it is not a predifined skill. The player can imagine and decide how his character will react to the attack. the defence effeciveness is determined by the spin according to the following chart:</p>
        <ul>
            <li>{'0=> Recieve all damage'}</li>
            <li>{'1~3=> 10% damage reduction'}</li>
            <li>{'4~9=> 20% damage reduction'}</li>
            <li>{'10~14=> 60% damage reduction'}</li>
            <li>{'15~18=> 80% damage reduction'}</li>
            <li>{'19~20=> 100% damage reduction'}</li>   
        </ul>
        <h2>Elemental effects</h2>
        <p>There are several Elemental effects that can be inflicted by various methodes</p>
        <ul>
            <li>Burn: 5% max HP per turn.</li>
            <li>Poison: 3% max HP per turn + 50% healing reduction.</li>
            <li>Bleed: Starts at 1% HP damage and increases by 1% each turn (cap 10%).</li>
            <li>Freeze: Takes 20% more damage.</li>
            <li>Electrofied: Deals 20% less damage.</li>
            <li>Blind: -3 to all rolls.</li>
        </ul>
        <h2>Leveling</h2>
        <p>The max level in this particular campaign is 10. Every level the character gains one attribute point that can be used to increase chosen attributes. However there's an initial attribute cap that limits the attribute max to 8 until it is removed at level 6.</p>
        <h2>MultiClass</h2>
        <p>At level 5 players can choose a secondary class.They get the passive and the trigger of the class. Triggers are activated once per battle regardless of source.They can use the secondary class weapons under the condition that for every weapon or weapon equivalent they get, they can choose 1 normal skill to add to their kit.So the 4 skills system becomes 5 skills system.If a player chooses a Summoner or Beast Tamer as secondary class, they don't get the health raise of level 5.</p>
        <h2>Dual wield</h2>
        <p>Melee Classes can hold two one handed weapons, as a result they replace the special skill of the class (like shield skill, or warcrys )with a normal skill of the secondary weapon. Changing from or into the the dual wielding takes 0.5 AP.</p>
        <h2>Two Handing</h2>
        <p>Melee classes can two hand any weapon. As a result they replace the special skill of the class (like shield skill, or warcrys )with the second normal skill of the weapon they have weapon. Changing from or into the two handing takes 0.5AP.</p>
        </article>
    </div>
    </>
}