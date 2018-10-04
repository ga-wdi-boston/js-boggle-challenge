grid = []
with open("input.rtf", encoding="utf-8") as fp:
    for line in fp:
        grid.append(line)
    #for i in range(N):
    #    grid.append(fp.readline().strip())
    #numOfWords = int(fp.readline().strip())
    #for j in range(numOfWords):
    #    coordinates.append(fp.readline().strip())
    #numOfPlayers = int(fp.readline().strip())

print(grid)
#print(numOfWords, numOfPlayers)
