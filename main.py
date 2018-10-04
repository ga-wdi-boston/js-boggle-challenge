import numpy as np
import sys
import os

class Player:
    guessed = ''

    def __init__ (self,name,score,passcounter,guessed):
        self.name = name
        self.score = score
        self.passcounter = passcounter
        self.guessed = guessed

    def get_score(self,inp):

        if inp.upper() == 'PASS':
            self.passcounter = self.passcounter + 1
        else:
            for word in words:
                if inp.upper() == word:
                    self.score = self.score + 1
                    self.guessed = self.guessed + ',' + str(word)
                    bag.append(word)
                    words.remove(word)
                else:
                    self.score = self.score + 0

        return self.score



if __name__ == "__main__":


    filepath = sys.argv[1]
    if not os.path.isfile(filepath):
        print("File path {} does not exist.")
        sys.exit()

    inputFile = [] # Store all the file data in this master array
    with open(filepath, "r") as f:
        for line in f:
            inputFile.append(line.strip('\n'))

    N = 15 #Number of rows and columns of the grid
    #reading the input from the master array
    grid = []
    coordinates = []
    for i in range(N):
        grid.append(inputFile[i])

    numOfWords = int(inputFile[N])

    for k in range(N+1, N+1+numOfWords):
        coordinates.append(inputFile[k])

    numOfPlayers = int(inputFile[N+1+numOfWords])

    #This is a sample input which is used to test the program without reading input from a file
    #To use this input, uncomment the block below and comment the block above
    '''
    N = 15
    grid = ['FUZTPEKYCNRLHTK','BAKXGHQLAZZHRJI', 'EDGSIOTHERZGFVX', 'YUGOIVEMSUBIETC', 'FGFJNQNSMBMSTUQ', 'WAENANTFJAVVOSU', 'CJULLQGIXZBKHNQ', 'UUBOOKKRTJEJSHO', 'QNBHPRMSVYFZLOF', 'WUIALPGWZWNJASQ', 'GOWPDHLLYFXUNHY', 'FZKGDFHMESMEGNJ', 'GSXTPDXLERMBMSQ', 'UWKWRZMDDWCTQAK', 'JQBFJXXJPZHBGGC']
    grid = np.array(grid)

    coordinates = ['2529','2656','7275']
    numOfWords = 3
    numOfPlayers = 2 # minimum no. of players is 2
    if numOfPlayers <2:
        print("Cant play with less than 2 players. Add another player")
        exit()
    '''

    words = [] # array which will store the words mentioned
    players = list()
    passmeter = np.zeros(numOfPlayers) #array to keep track of how many times each player passes
    bag = [] #consists of all the guessed words globally

    def move(x1,y1,x2,y2,arr):
        temp = ''
        #check to move backwards
        if x1 == x2:
            #move horizontally
            for i in range(y1,y2+1):
                temp = temp + str(arr[x1][i])
        elif y1 == y2:
            #move vertically
            for i in range(x1,x2+1):
                temp = temp + str(arr[i][y1])
        else:
            #move diagonally
            for i, j in zip(range(x1,x2+1),range(y1,y2+1)):
                temp = temp + str(arr[i][j])

            #To move in L shape, move in horizontal and vertical directions respectively
        return temp


    #To set up the list with all the words which are to be checked
    def setUpWords(coordinates):
        for i in range(len(coordinates)):
            start_x = int(coordinates[i][0])
            start_y = int(coordinates[i][1])
            end_x = int(coordinates[i][2])
            end_y = int(coordinates[i][3])
            words.append(move(start_x,start_y,end_x,end_y,grid))

    setUpWords(coordinates)

    #List of player objects
    #Each player has a unique name, score, list of guessed words, number of passes
    for i in range(numOfPlayers):
        name = input('Enter player '+str(i)+'\'s name :')
        players.append(Player(name,0,0,''))


    #Function to print the grid
    def showGrid():
        for i in range(N):
            print(grid[i])

    #Function to keep track of the number of times each player PASSes
    def passcounter():
        for i in range(len(players)):
            passmeter[i] = players[i].passcounter
        return min(passmeter)


    #loop to keep the game going till exit conditions are met
    while(len(words) > 0):
        for i in range(len(players)):
            name = players[i].name
            showGrid()
            inp = input(name + '\'s turn :')
            if inp.upper() == 'PASS':
                score = players[i].get_score(inp)
                print(name + ' has PASSed, ' + name +'\'s score is '+ str(score))
                passcounter()

            else:
                if inp.upper() in words:
                    score = players[i].get_score(inp)
                    print(inp.upper() + ' is a correct choice. ' + name +'\'s score is '+ str(score))

                else:
                    if inp.upper() in bag:
                        score = players[i].get_score(inp)
                        print(inp.upper() + ' is already identified. ' + name +'\'s score is '+ str(score))

                    else:
                        score = players[i].get_score(inp)
                        print(inp.upper() + ' is a wrong choice. ' + name +'\'s score is '+ str(score))

            if passcounter() >= 2:
                break
            else:
                pass

        if passcounter() >= 2:
            break
        else:
            pass

    #when the game is done, print the winner, their score and guesses
    def winner():

        if (passcounter() <= 2 and len(bag) == 0):
            print('The game is tied as none of the players have guessed a word')
        else:
            #Case where more than 1 person can win
            win_name = ''
            win_guessed = ''
            scores = np.zeros(len(players))
            for i in range(len(players)):
                scores[i] = players[i].score
            highscore = max(scores)

            for i in range(len(players)):
                if players[i].score == highscore:
                    win_name = win_name + ',' + str(players[i].name)
                    win_guessed = win_guessed + str(players[i].guessed)

            print('The game has ended and ' + win_name[1:] + ' has won the game. ' + win_name[1:] + ' identified:' + win_guessed[1:])

    winner()
