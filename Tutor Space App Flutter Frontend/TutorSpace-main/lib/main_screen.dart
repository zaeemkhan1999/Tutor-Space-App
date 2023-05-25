// import 'package:curved_navigation_bar/curved_navigation_bar.dart';
// import 'package:flutter/cupertino.dart';
// import 'package:flutter/material.dart';

// class MainScreen extends StatefulWidget {
//   const MainScreen({Key? key}) : super(key: key);

//   @override
//   State<MainScreen> createState() => _MainScreenState();
// }

// class _MainScreenState extends State<MainScreen> {
//   int _index = 0;
  
//   @override
//   void initState() {
//     super.initState();
//     context.read<MainScreenProvider>().getUserDetails(user.uid);
//   }

//   @override
//   Widget build(BuildContext context) {
//     users = context.watch<MainScreenProvider>().list;

//     final items = <Widget>[
//       ImageIcon(AssetImage('assets/images/mapicon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/requesticon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/trackicon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/post.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/profileicon.png'), size: 30),
//     ];

//     final items1 = <Widget>[
//       ImageIcon(AssetImage('assets/images/mapicon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/requesticon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/trackicon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/historyicon.png'), size: 30),
//       ImageIcon(AssetImage('assets/images/profileicon.png'), size: 30),
//     ];

//     return Scaffold(
//       bottomNavigationBar: CurvedNavigationBar(
//         backgroundColor: Color(0xFF004643),
//         buttonBackgroundColor: Color(0xFFF9BC60),
//         height: 50,
//         animationDuration: const Duration(milliseconds: 400),
//         items: users[users.length - 1].isngo == 1 ? items1 : items,
//         index: _index,
//         onTap: (selectedIndex) {
//           setState(() {
//             _index = selectedIndex;
//             print(_index);
//           });
//         },
//       ),
//       body: Container(
//         color: Colors.blue,
//         width: double.infinity,
//         height: double.infinity,
//         alignment: Alignment.center,
//         child: getSelectedPage(index: _index),
//       ),
//     );
//   }

//   Widget getSelectedPage({required int index}) {
//     Widget widget = SizedBox();
//     switch (index) {
//       case 0:
//         if (users[users.length - 1].isngo == 1) {
//           widget = HomeNgo();
//         } else {
//           widget = HomeDonor();
//         }
//         break;
//       case 1:
//         if (users[users.length - 1].isngo == 1) {
//           widget = RequestNgo();
//         } else {
//           widget = RequestDonar();
//         }
//         break;
//       case 2:
//         if (users[users.length - 1].isngo == 1) {
//           widget = TrackNgo();
//         } else {
//           widget = TrackDonar();
//         }
//         break;
//       case 3:
//         if (users[users.length - 1].isngo == 1) {
//           widget = HistoryScreen();
//         } else {
//           widget = PostFood();
//         } //history page here widget = MapLoader();
//         break;
//       case 4:
//         if (users[users.length - 1].isngo == 1) {
//           widget = ProfileNgo();
//         } else {
//           widget = ProfileDonar();
//         }
//         break;
//       default:
//         widget = PostFood();
//     }
//     return widget;
//   }
// }
