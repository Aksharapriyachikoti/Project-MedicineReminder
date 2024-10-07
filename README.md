# Medication Reminder
Project-MedicineReminder is a medication management application designed to help users track their medicine schedules, set reminders, and receive notifications at prescribed times. The app ensures that users never miss their medication by offering timely alerts.

## Features
- Set Reminders: Easily add reminders for medicines with specific timings.
- Receive Notifications: Get notified when it's time to take your medicine.
- Medicine History: Track the history of medicines you have taken.
- User-friendly Interface: Simple and intuitive UI for easy management of medicine schedules.

## Code Summary

### Medicine Reminder Landing Page
- index.html
Navigation Bar: Contains a logo, fixed at the top for easy access.
Main Content: Displays a central message "Your Health is our priority Because Your Life Matters".
Login Button: Redirects users to the reminders page for managing medication.

- style.css
Background: Full-screen image related to health and medication.
Responsive Design: Styles for buttons and text to enhance user interaction and accessibility.
Centering: Uses absolute positioning to center the main message and buttons on the page.

### Reminder
- reminders.html 
    This HTML document provides the basic structure for a Medicine Reminder application. It features a title, a button for adding new reminders, and an empty list where reminders will be displayed. 

- style.css
    This CSS stylesheet defines the overall layout and aesthetics of the "Medicine Reminder" application, including background colors, element dimensions, rounded corners, and button styles. The design aims for a clean, user-friendly interface, ensuring that users can easily add and manage their medicine reminders.

- index.js
    This code provides a user-friendly way to manage reminders. Users can create reminders, mark them as completed, and delete them as needed. The "Set" button allows users to navigate to a separate alarm clock page, enhancing the application's functionality.

- noti.js
    This code leverages the Notifications API to provide a user-friendly reminder system for medicine reminders. It checks for browser support and permission settings before displaying a notification that welcomes the user to the application. Clicking the notification directs the user to the medicine reminder page, and the notification closes automatically after a brief display. This enhances user engagement by providing timely alerts and quick access to the application.


### Alaram Clock Main
- clock.html 
This code represents a simple HTML structure for an alarm clock web application.
This HTML code sets the foundation for an alarm clock web application. To make it functional, you would need to implement the corresponding CSS styles in styles.css for layout and aesthetics, and JavaScript logic in script.js to handle the clock and alarm functionalities.

- script.js
This code provides the interactive functionality for the alarm clock application:
It dynamically updates the time and checks against set alarms.
Allows users to set and delete alarms via dropdown menus and buttons.
Plays an audio alert when an alarm goes off and provides a way to stop the alarm.
To fully integrate this functionality, ensure that the audio/Alarm-ringtone.mp3 file exists in the specified path, and that the HTML structure is correctly set up as you previously provided.

- style.css
This CSS code styles an alarm clock web application, creating a modern and visually appealing interface.

- audio
An MP3 file is used for alarm sounds, which can be played when reminders trigger.


## Functionality
- Display Current Time: The application displays the current date and time dynamically.
- Set Alarms: Users can select a time from dropdown menus to set an alarm.
- Stop Alarm: A button to stop the currently ringing alarm.
- User Interaction: The application likely has JavaScript functionality that is not shown in the HTML code but would handle interactions such as setting alarms and updating the time display.


## Contact
For any issues or inquiries, feel free to contact the project maintainer at c.aksharapriya@gmail.com


