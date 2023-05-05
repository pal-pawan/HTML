import pyttsx3
import datetime

engine = pyttsx3.init('sapi5')
voice = engine.getProperty('voices')

engine.setProperty('voices', voice[0].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

def greetMe():
    hour=int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak('Good Morning Sir!')
        print("Good Morning Sir, May you have a wonderful day ahead!")
    elif hour>=12 and hour<=16:
        speak('Good Afternoon Sir!')
        print("Good Afternoon Sir!, May your Day be cheerful!")
    else:
        speak('Good Evening Sir!')
        print("Good Evening Sir!, May your Hardwork bring better results!")

if __name__ =="__main__":
    greetMe()