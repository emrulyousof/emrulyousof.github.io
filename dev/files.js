function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: kdiriye18[ at ]gmail.com\n\n" +
              "LinkedIn: https://www.linkedin.com/in/khalid-diriye-1b5378106\n\n" +
              "GitHub: https://github.com/KhalidDiriye\n"
    };

var bhr = 
    {
        name: "BHR_System",
        type: "pdf",
        link: "projects/BHR_System.pdf"
    };

var cc = 
    {
        name: "CC_Regristration",
        type: "pdf",
        link: "projects/CC_Regristration.pdf"
    };

var diagrams = 
    {
        name: "Diagrams",
        type: "pdf",
        link: "projects/Diagrams.pdf"
    };

var dorking = 
    {
        name: "Dorking",
        type: "pdf",
        link: "projects/Dorking.pdf"
    };

var sec_strats =
    {
        name: "sec_strats",
        type: "pdf",
        link: "projects/Security_Strategy.pdf"
    };


var resume_pdf =
    {
        name: "KhalidDiriyeResume",
        type: "pdf",
        link: "`KhalidDiriyeResume.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  Khalid Diriye\
\n kdiriye18@gmail.com                                                 507-210-7776\
\n\
\n********************************************************************************\
\n\
\n   Technical Skills: Python, Unix/Linux, Bash, C#, Windows (XP/7/8/10), Linux (Ubuntu/Kali), and Mac OS (El Capitan/Sierra)\
\n   Web & Design: HTML/CSS, PHP/MySQL, Adobe Photoshop, Sony Vegas Pro 15\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   Minnesota State University, Mankato\
\n   Lead Information Security Analyst Intern\
\n      - Managed a group of 5 security analyst for daily incident response task and worked under the supervison of the Chief Information Security Officer to create \
\n   ___________________________________________________________________________\
\n   Minnesota State University, Mankato\
\n   Information Security Analyst Intern\
\n      - Developed \
\n   ___________________________________________________________________________\
\n   Riverland Community College\
\n   Technical Support Specialist\
\n      - Troubleshooting PCs or Macs and providing customer service.\
\n\
\n********\
\nResearch\
\n********\
\n\
\n    Vendor Research: Alien Vault's Unified Security Managment, LogRhytm Enterprise, Palto's Next Gen Firewalls, and Microsoft's Windows Defender Advanced Threat Protection\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   Minnesota State University, Mankato (MNSU)\
\n      - Bachelor of Science in Computer Information Technology, CompTIA - Security+ Cert, MNSU - Network Technologies Cert\
"
    };

var welcome_txt = 
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;lime;black]Welcome! My name is Khalid Diriye]\nGlad your here!\n\nPress ` to minimize the terminal. Available commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open] (opens file like pdf and jpg)\n"
    };


var excelformscompare =
    {
        name: "exceldrawer",
        type: "pdf",
        link: "https://github.com/KhalidDiriye/Scripts/blob/master/ExcelDrawer.py"
    };
var optitera =
    {
        name: "optitera",
        type: "pdf",
        link: "https://github.com/KhalidDiriye/OptiTrra"
    };


var aboutme =
    {
        name: "aboutme",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]khalid.d:/aboutme~] ',
                name:   'khalid.d',
                completion: function(term, string, callback) {
                    callback([
                              'resume.txt',
                              'contact.txt',
                              'KhalidDiriyeResume.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "projects",
        type: "folder",
        kids: [excelformscompare, optitera, bhr, cc, dorking, diagrams, sec_strats],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]khalid.d:/projects~] ',
                name:   'khalid.d',
                completion: function(term, string, callback) {
                    callback([
                              'excelformscompare',
                              'BHR_System.pdf',
                              'Diagrams.pdf',
                              'Dorking.pdf',
                              'CC_Registration.pdf',
                              'Sec_Strategy',
                              'optitera'
                              ]);},
              }
    };

var home = 
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]khalid.d:/~] ',
                name:   'khalid.d',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'projects',
                              'aboutme',
                              ]);},
              }



    };

aboutme.back = home;
projects.back = home;