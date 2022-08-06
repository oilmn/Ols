#from distutils.log import debug
#from re import T
from flask  import Flask
skills_app = Flask(__name__)

@skills_app.route("/")
def hoom():
    return"hello"

if __name__ == "__main__":
    skills_app.run(debug=True)