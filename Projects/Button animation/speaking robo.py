import pyttsx3

message = input("Please Enter the Message.")


engine = pyttsx3.init('sapi5')
voice = engine.getProperty('voices')

engine.setProperty('voices', voice[1].id)

def speak(audio):
    engine.say(audio)
    engine.runAndWait()

if __name__ =="__main__":
    speak(message)