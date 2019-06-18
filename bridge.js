import { Plugins } from '@capacitor/core';
const { SplashScreen, LocalNotifications } = Plugins;

export function HideSplashScreen(){
	console.log("Hide the splash (you should do this on app launch!!");
	SplashScreen.hide();
}

export function SetLocalNotification(){
	console.log("SetLocalNotification called.");

	LocalNotifications.schedule({
		notifications: [
			{
				title: "Ελα ρε!",
				body: "Απο Phaser!",
				id: 1,
				schedule: { at: new Date(Date.now() + 1000 * 10) },
				sound: null,
				attachments: null,
				actionTypeId: "",
				extra: null
			}
		]
	});
}


