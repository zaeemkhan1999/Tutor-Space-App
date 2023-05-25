import 'package:flutter/material.dart';
// import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:provider/provider.dart';
import 'package:tutorez_project/Feature/studentlogin/authprovider.dart';
import 'package:tutorez_project/Feature/studentsignup/student_signup_firstscreen.dart';
import 'package:tutorez_project/Feature/studentsignup/studentsignup_provider.dart';
import 'package:tutorez_project/splash.dart';

import 'Feature/map/studenthomeprovider.dart';
import 'Feature/post/studentpost_provider.dart';
import 'Feature/studentlogin/student_login.dart';
import 'Feature/studentsignup/student_signup_secondscreen.dart';
import 'Feature/tutorlogin/auth_tutor_provider.dart';
import 'Feature/tutorsignup/tutor_signup_firstscreen.dart';
import 'Feature/tutorsignup/tutorsignup_provider.dart';

// final storage = FlutterSecureStorage();
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => StudentSignupProvider()),
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => StudentHomeProvider()),
        ChangeNotifierProvider(create: (_) => StudentPostProvider()),
        ChangeNotifierProvider(create: (_) => TutorSignupProvider()),
        ChangeNotifierProvider(create: (_) => AuthTutorProvider()),
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: Splash(),
      ),
    );
  }
}
