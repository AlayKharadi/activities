### waterTrap

start from the left end (0) & right end (n) of the array.
approch towards center of the array.
so to get how much water you can store for any given position you can add height of the building that is - (Minimum of the tallest buildings on left and right side of given position.) minus the height of the current building.

lets say you have [2, 1, 0, 1, 3]. In this case if we want to find between 2 and 3, 2 is smaller value which should be the top most height of the stored water in-between this region. also if we talk about 0 we can start stroing water from 0 th level but In 1 case height 1 is occupied, so we have to start from level 1.

sum = sum + (max - currentHeight)

from left and right whichever builidng is shorter is used as we will know that there is another building(higher) which can hold water. for [2, 1, 3] we have chance for 1 & 2 that 3 can hold water in between as its taller.

if we have found so far the tallest builing from either left or right it means that we won't be able to store water inside that position. but if building is not tallest that means that we can store water.

for example, [0, 1, 3, 2, 3];

so for 0 & 1 water will flow out, but for 2 after 3 as we have found a dip so we can add water inside.
