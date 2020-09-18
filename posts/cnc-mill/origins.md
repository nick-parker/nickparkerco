---
title: "CNC Mill Origins"
date: "2020-09-17"
lede: "A 2 ton machine moves into the family garage"
thumb: ""
---

When I was 17 I wanted to build a CNC milling machine from scratch. I was designing a flimsy aluminum extrusion gantry that would _maybe_ be able to cut aluminum slowly with a very small tool. It would've looked and cost about the same as this [OpenBuilds](https://openbuildspartstore.com/openbuilds-sphinx-55-20-x-20/) machine.
A dear family friend runs a machine shop 20 minutes from my childhood home, so I emailed him for advice on a $60 spindle. He explained that the spindle was terrible, then replied "You're in luck. I have an old machine I was going to take apart and sell for scrap."
A few weeks and a hired truck later, my dad permanently lost a car worth of space in his garage:
    ![](/images/mill_arrival.jpg)
    ![](/images/mill_dirty.jpg)
The machine my friend was going to scrap is a Shizuoka ST-N which was imported new from Japan around 1980 and retrofitted with stepper motors, a Bandit III CNC controller, and a Summit-Dana Quickdraw automatic tool changer.
It weighs in at around 4000 lbs, it was designed to interface with teletype or the _powerful, new, Apple II_, and it could store 1000 lines of program memory. My friend was scrapping it because the controller had died yet again and it wasn't worth the space in his shop anymore.

This old piece of iron was built for life in a real shop, so moving it into my family's garage was an adventure in its own right. The guys we hired were wizards with the forklift - they had the whole thing hanging off the tongs at a terrifying 20 degree angle and squeezed it through the garage door with just a couple inches of clearance. From there we used a dolly and finally crowbars and lots of small pipe rollers to position it in the garage. 

# Wiring the Mill

Beyond highly visible features like "larger doors" and "overhead lifts," some of the most important features of 'real' shops are 240V single phase and three phase electric power. The ST-N needs both, and American residential power provides neither.

The three phase was solved with yet another gift from our incredible friend: A rotoconverter. This is a stupid simple system where 120V power drives a motor, and that motor drives a three phase generator. It's noisy and not the most efficient thing, but it works and he had it laying around. But, the three phase only runs the spindle and the flood coolant pump. If I wanted this thing to _move_ it needed single phase 240V power too.
    ![](/images/rotoconverter.jpg)
Now for a quick background in US home wiring: Our electric transmission system uses three phase transmission lines at thousands of volts because it packs the most power per pound of transmission line. When that 'kill you dead in an instant' power gets to your local substation it's stepped down to 240V three phase power - exactly what I get out of my rotoconverter! But from there we only send one 240V phase to each house and transform it again into a _split phase configuration_ 
![](/images/splitphase.jpg)
In this arrangement our single 240V sine wave turns into two 120V waves with opposite phases like so
![](/images/splitphase_waves.jpg)

120V is a happy medium voltage for households. It can run your toaster and hair dryer but it's not too easy to kill yourself with. It's also convenient because if you do want 240V power for say, your clothes dryer, or your CNC mill, you can wire the two 120V phases to the hot and neutral inputs of your appliance and because they're out of phase you get 240V of AC voltage across them, just like you had before the transformer. _Except_, with "real" 240V power neutral and ground have no potential between them, and with split phase 240V both hot and neutral are 120V away from ground. This turns out to be important.

My dad helped me with all this high voltage wiring when I was 17, then I spent a couple weeks climbing all over the machine cleaning it, figuring out how it works, and looking for the dead parts I'd need to fix. As it turned out a fried 5V logic power supply connector was the only issue for the motion system (the spindle had more problems), so before long I had it chugging around on the X Y Z axes when I punched commands into the antique front panel.

One day I took my sibling out to the garage barefoot to quickly show off a recent achievement before dinner. I touched the machine chassis and my arm was flung away with a bizarre sensation! I recognized the feel of mains voltage from some haphazard hydrogen electrolysis experiments when I was younger, but that didn't make any sense so I gingerly poke the thing again and sure enough, the entire machine was at 120 volts AC.

As it turns out, in the 70s the distinction between neutral and ground was a little less respected. There are lug connections to ground throughout the Shizuoka, but a few critical ones were disconnected and a few extra ones were connected to neutral. **Very few of the big cast iron parts of my machine were actually grounded, and most of the others were connected to neutral. In a "real" shop with real 240V wiring that's a harmless distinction with 0V of difference, but on my residential power it meant touching the thing with uninsulated feet on our concrete floor felt pretty bad.**

A couple hours probing with a multimeter and shifting wires around later my mill was safe to touch again, but the object lesson in stressing the details with powerful systems has stuck around.