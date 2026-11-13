const LIBRARY = [
{
 id:"bolt-m8", cat:"basic", icon:"🔩",
 title:"בורג M8×40 ראש משושה (ISO 4017)",
 summary:"בונים ראש משושה עם Polygon, מוסיפים גוף גלילי, קוטמים את הראש ואת הקצה, ומוסיפים הברגה אמיתית עם הפקודה Thread.",
 specs:[{k:"קוטר נומינלי",v:"8 מ״מ"},{k:"פסיעה",v:"1.25 מ״מ"},{k:"אורך גוף",v:"40 מ״מ"},{k:"מפתח (על פני השטוחים)",v:"13 מ״מ"},{k:"גובה ראש",v:"5.3 מ״מ"},{k:"אורך הברגה",v:"22 מ״מ"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש ויחידות",path:"File > New > Part",actions:["פתח קובץ Part חדש.","בפינה הימנית התחתונה של המסך ודא שהיחידות הן MMGS (מ״מ, גרם, שנייה).","שמור מיד בשם Bolt_M8x40."],tip:"עדיף לשמור כבר בהתחלה, כדי שלא תאבד עבודה אם התוכנה קורסת.",check:"שם הקובץ מופיע בראש עץ הפיצ׳רים (FeatureManager)."},
  {phase:"סקיצה",title:"סקיצה של ראש משושה",path:"Top Plane > Sketch > Polygon",actions:["בחר Top Plane ולחץ Sketch.","בחר Polygon, הגדר 6 צלעות וסמן Inscribed circle.","מקם את המרכז בראשית (Origin) ומשוך החוצה.","עם Smart Dimension קבע 13 מ״מ לקוטר המעגל החסום (זה המרחק בין שטוחים מקבילים).","קבע שאחת הצלעות אופקית (Horizontal)."],tip:"Inscribed = מעגל שנוגע בצלעות = המידה של המפתח. אם תבחר Circumscribed תקבל ראש גדול מדי.",check:"הסקיצה הפכה שחורה: היא מוגדרת לגמרי (Fully Defined)."},
  {phase:"פיצ׳ר",title:"Extrude לראש",path:"Features > Extruded Boss/Base",actions:["לחץ Extruded Boss/Base.","Direction 1: Blind, עומק 5.3 מ״מ, כלפי מעלה.","אשר עם ✓."],tip:"",check:"יש לך משושה בעובי 5.3 מ״מ."},
  {phase:"פיצ׳ר",title:"גוף הבורג",path:"Top Plane > Sketch > Circle",actions:["בחר שוב Top Plane ופתח סקיצה.","צייר מעגל מהראשית בקוטר 8 מ״מ.","Extruded Boss/Base לעומק 40 מ״מ, ולחץ Reverse Direction כדי שהגוף ייצא כלפי מטה."],tip:"אם הגוף יוצא לתוך הראש, לחץ על החץ Reverse Direction.",check:"מסובבים את המודל ורואים גוף באורך 40 מתחת לראש."},
  {phase:"פרטים",title:"קיטום 30° על הראש",path:"Front Plane > Sketch > Revolved Cut",actions:["פתח סקיצה על Front Plane.","צייר Centerline אנכי דרך הראשית (זה ציר הסיבוב).","בפינה העליונה החיצונית של הראש צייר משולש: קו אופקי על הפאה העליונה, וקו בזווית 30° לאופק שיוצא מנקודה בקוטר 13 מ״מ.","Features > Revolved Cut סביב הציר, 360°."],tip:"זה הקיטום שנותן לראש משושה את המראה הקלאסי של 'כתר'.",check:"הפינות של המשושה מקוטמות בצורה עגולה מלמעלה."},
  {phase:"פרטים",title:"קיטום בקצה",path:"Features > Fillet ▾ > Chamfer",actions:["בחר Chamfer.","בחר את הקצה המעגלי בסוף הבורג.","Distance-Angle: מרחק 1 מ״מ וזווית 45°."],tip:"",check:"הקצה מקוטם, ולבורג קל יותר להיכנס לאום."},
  {phase:"פרטים",title:"רדיוס מתחת לראש",path:"Features > Fillet",actions:["בחר Fillet.","בחר את הקצה שבו הגוף פוגש את הראש.","רדיוס 0.4 מ״מ."],tip:"הרדיוס מקטין ריכוז מאמצים בדיוק במקום שבו ברגים נשברים.",check:"המעבר בין הגוף לראש מעוגל."},
  {phase:"הברגה",title:"הברגה אמיתית",path:"Features > Hole Wizard ▾ > Thread",actions:["פתח את Thread (נמצא בתפריט הנפתח של Hole Wizard; קיים מגרסה 2016).","Edge: בחר את הקצה המעגלי בסוף הבורג.","Type: Metric Die, Size: M8x1.25.","Thread method: Cut thread, אורך 22 מ״מ.","אשר."],tip:"לחלק במכלול גדול עדיף Cosmetic Thread (Insert > Annotations > Cosmetic Thread): הוא מסמן הברגה בשרטוט בלי להכביד על המודל.",check:"רואים חריצים סליליים לאורך 22 מ״מ מהקצה."},
  {phase:"גימור",title:"חומר",path:"FeatureManager > Material (right-click) > Edit Material",actions:["קליק ימני על Material בעץ.","בחר Steel > AISI 1045 Steel, cold drawn (או Plain Carbon Steel).","Apply ואחר כך Close."],tip:"",check:"הבורג נצבע אפור-מתכתי, ו-Evaluate > Mass Properties מראה מסה של כ-20 גרם."},
  {phase:"גימור",title:"שמירה ושרטוט",path:"File > Make Drawing from Part",actions:["שמור (Ctrl+S).","אם צריך שרטוט: File > Make Drawing from Part, וגרור מבט Front ומבט Top.","Annotations > Model Items כדי לייבא את המידות."],tip:"",check:"יש לך קובץ SLDPRT, ואם רצית גם SLDDRW."}
 ],
 final:{result:"בורג M8×40 עם ראש משושה מקוטם, הברגה אמיתית וחומר מוגדר.",next:["צור אום M8 תואם ובדוק התאמה במכלול.","הפוך אורך לפרמטר עם Design Table כדי ליצור 20, 30, 40 ו-50 מ״מ בקובץ אחד."]}
},
{
 id:"nut-m10", cat:"basic", icon:"⬡",
 title:"אום משושה M10 (ISO 4032)",
 summary:"משושה עם Extrude, חור מוברג עם Hole Wizard וקיטומים בשני הצדדים.",
 specs:[{k:"הברגה",v:"M10×1.5"},{k:"מפתח",v:"16 מ״מ"},{k:"גובה",v:"8.4 מ״מ"},{k:"שקע",v:"90°"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש",path:"File > New > Part",actions:["Part חדש, יחידות MMGS.","שמור בשם Nut_M10."],tip:"",check:""},
  {phase:"סקיצה",title:"משושה",path:"Top Plane > Sketch > Polygon",actions:["Polygon עם 6 צלעות, Inscribed circle, מרכז בראשית.","קוטר המעגל החסום 16 מ״מ, וצלע אחת אופקית."],tip:"",check:"הסקיצה מוגדרת לגמרי (שחורה)."},
  {phase:"פיצ׳ר",title:"Extrude",path:"Features > Extruded Boss/Base",actions:["Direction: Mid Plane, עומק 8.4 מ״מ."],tip:"Mid Plane שם את Top Plane באמצע האום, וזה נוח לקיטום סימטרי ולמייטים (Mates).",check:""},
  {phase:"חור",title:"חור מוברג",path:"Features > Hole Wizard",actions:["Hole Type: Straight Tap, Standard: ISO, Size: M10x1.5.","End Condition: Through All.","סמן Cosmetic thread, וב-Near side countersink הגדר 11 מ״מ × 90°.","בלשונית Positions לחץ על הפאה העליונה וקבע את הנקודה בראשית."],tip:"Hole Wizard יוצר חור בקוטר הקידוח הנכון (8.5 מ״מ) ומוסיף סימון הברגה שמופיע בשרטוט.",check:"יש חור עם הברגה קוסמטית (קו מקווקו) ושקע בכניסה."},
  {phase:"פרטים",title:"קיטום 30° בשני הצדדים",path:"Front Plane > Sketch > Revolved Cut",actions:["סקיצה על Front Plane עם Centerline אנכי בראשית.","צייר משולש בפינה העליונה ומשולש בפינה התחתונה, בזווית 30° מנקודה בקוטר 16 מ״מ.","Revolved Cut, 360°."],tip:"אפשר לצייר משולש אחד ולהשתמש ב-Mirror Entities סביב קו אופקי.",check:"שני צדי האום מקוטמים."},
  {phase:"גימור",title:"חומר ושמירה",path:"Material > Edit Material",actions:["Steel > Plain Carbon Steel.","שמור."],tip:"",check:"Mass Properties מראה כ-11 גרם."}
 ],
 final:{result:"אום M10 תקני עם חור מוברג וקיטומים.",next:["במכלול חבר אותו לבורג עם Mechanical Mates > Screw."]}
},
{
 id:"washer-m6", cat:"basic", icon:"⭘",
 title:"דסקית שטוחה M6 (ISO 7089)",
 summary:"שני מעגלים ו-Extrude. בסוף מוסיפים Design Table כדי לקבל כמה מידות בקובץ אחד.",
 specs:[{k:"קוטר פנימי",v:"6.4 מ״מ"},{k:"קוטר חיצוני",v:"12 מ״מ"},{k:"עובי",v:"1.6 מ״מ"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם Washer."],tip:"",check:""},
  {phase:"סקיצה",title:"שני מעגלים",path:"Top Plane > Sketch > Circle",actions:["שני מעגלים מהראשית.","קבע קוטר 12 לחיצוני ו-6.4 לפנימי."],tip:"",check:"הסקיצה מוגדרת לגמרי."},
  {phase:"פיצ׳ר",title:"Extrude",path:"Features > Extruded Boss/Base",actions:["Blind, עומק 1.6 מ״מ."],tip:"SolidWorks מזהה לבד שהמעגל הפנימי הוא חור.",check:"יש טבעת שטוחה."},
  {phase:"פרטים",title:"קיטום קטן",path:"Features > Chamfer",actions:["בחר את הקצה החיצוני העליון, 0.3×45°."],tip:"",check:""},
  {phase:"מתקדם",title:"Design Table לכמה מידות",path:"Insert > Tables > Design Table",actions:["Insert > Tables > Design Table, ובחר Auto-create.","בחר את המידות D1 (חיצוני), D2 (פנימי) ו-D1@Boss-Extrude1 (עובי).","בטבלת ה-Excel הוסף שורות: M5 = 10 / 5.3 / 1, M8 = 16 / 8.4 / 1.6, M10 = 20 / 10.5 / 2.","לחץ מחוץ לטבלה כדי ליצור את הקונפיגורציות."],tip:"כך יש לך קובץ אחד עם כל המידות, ובמכלול בוחרים קונפיגורציה.",check:"בלשונית ConfigurationManager מופיעות M5, M6, M8 ו-M10."},
  {phase:"גימור",title:"חומר ושמירה",path:"Material > Edit Material",actions:["Steel > Plain Carbon Steel, ושמור."],tip:"",check:""}
 ],
 final:{result:"דסקית עם כמה קונפיגורציות בקובץ אחד.",next:["שמור אותה כ-Library Feature או ב-Design Library לשימוש חוזר."]}
},
{
 id:"spur-gear", cat:"basic", icon:"⚙️",
 title:"גלגל שיניים ישר: מודול 2, 20 שיניים",
 summary:"בונים דיסקה בקוטר הראש, חותכים מרווח בין שתי שיניים בפרופיל מקורב, ומשכפלים אותו עם Circular Pattern. בסוף מוסיפים קדח עם חריץ לשגם.",
 specs:[{k:"מודול",v:"2"},{k:"מספר שיניים",v:"20"},{k:"קוטר פסיעה",v:"40 מ״מ"},{k:"קוטר ראש",v:"44 מ״מ"},{k:"קוטר תחתית",v:"35 מ״מ"},{k:"רוחב",v:"15 מ״מ"},{k:"קדח",v:"Ø10 + שגם 3 מ״מ"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש וקיצור דרך",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם Gear_m2_z20.","אם יש לך Toolbox: Design Library > Toolbox > ISO > Power Transmission > Gears > Spur Gear נותן גלגל מוכן. המדריך כאן בונה אותו ידנית, כדי ללמוד את השיטה."],tip:"",check:""},
  {phase:"סקיצה",title:"דיסקה בקוטר הראש",path:"Front Plane > Sketch > Circle",actions:["מעגל מהראשית בקוטר 44.","Extruded Boss/Base, Mid Plane, 15 מ״מ."],tip:"",check:"יש דיסקה Ø44×15."},
  {phase:"סקיצה",title:"קווי עזר: פסיעה ותחתית",path:"Sketch on front face",actions:["פתח סקיצה על הפאה הקדמית.","צייר שני מעגלים מהראשית: Ø40 (פסיעה) ו-Ø35 (תחתית), וסמן את שניהם For construction.","צייר Centerline אנכי מהראשית כלפי מעלה."],tip:"",check:""},
  {phase:"סקיצה",title:"פרופיל המרווח בין השיניים",path:"Sketch > 3 Point Arc",actions:["על מעגל הפסיעה, משני צדי ה-Centerline, סמן שתי נקודות במרחק 3.14 מ״מ זו מזו (עובי השן בפסיעה = π·m/2).","מכל נקודה צייר 3 Point Arc שיורד אל מעגל התחתית ועולה מעל קוטר הראש (Ø44).","סגור את הפרופיל בקשת על מעגל התחתית למטה ובקו מעל הראש למעלה.","הפוך את שני הצדדים לסימטריים: בחר את שתי הקשתות ואת ה-Centerline והוסף Symmetric."],tip:"זה פרופיל מקורב לאינבולוטה, ומספיק להדמיה, להדפסה ולמכלולים. לייצור מדויק השתמש ב-Toolbox או בתוסף אינבולוטה.",check:"יש פרופיל סגור בצורת 'U' רחב שחותך את הדיסקה."},
  {phase:"פיצ׳ר",title:"חיתוך מרווח אחד",path:"Features > Extruded Cut",actions:["Extruded Cut, Through All - Both."],tip:"",check:"נחתך מרווח אחד בהיקף."},
  {phase:"פיצ׳ר",title:"שכפול לכל ההיקף",path:"Features > Linear Pattern ▾ > Circular Pattern",actions:["View > Hide/Show > Temporary Axes כדי להציג את ציר הדיסקה.","Circular Pattern: Pattern Axis הוא הציר הזמני, Equal spacing, 360°, 20 מופעים.","Features to Pattern: Cut-Extrude1."],tip:"",check:"יש לך 20 שיניים שוות."},
  {phase:"קדח",title:"קדח וחריץ לשגם",path:"Sketch on front face",actions:["סקיצה על הפאה: מעגל Ø10 מהראשית.","מלבן ברוחב 3 מ״מ מעל המעגל, שהקצה העליון שלו גבוה ב-1.4 מ״מ מקצה המעגל (t2 של שגם 3×3).","Trim Entities לניקוי הקווים שבפנים.","Extruded Cut, Through All."],tip:"",check:"יש חור עם חריץ מלבני."},
  {phase:"פרטים",title:"רדיוסים",path:"Features > Fillet",actions:["Fillet של 0.4 מ״מ בתחתית השיניים. בחר קצה אחד וסמן Tangent propagation, או בחר את הפיצ׳ר ב-Pattern.","Chamfer 0.5×45° על קצוות הקדח."],tip:"אם ה-Fillet נכשל, הקטן את הרדיוס.",check:""},
  {phase:"גימור",title:"חומר",path:"Material > Edit Material",actions:["Steel > AISI 4140 לפלדה, או Plastics > Nylon 6/10 להדפסה.","שמור."],tip:"",check:"Mass Properties: כ-170 גרם בפלדה."}
 ],
 final:{result:"גלגל שיניים m2 z20 עם קדח ושגם.",next:["צור גלגל שני (למשל z40) ומקם אותם במכלול במרחק צירים 60 מ״מ, עם Mechanical Mates > Gear.","הפוך z ו-m למשתנים ב-Equations כדי לקבל גלגל פרמטרי."]}
},
{
 id:"l-bracket", cat:"basic", icon:"📐",
 title:"תושבת L מפח עם 4 חורים",
 summary:"בונים את התושבת ב-Sheet Metal מסקיצה פתוחה, מוסיפים חורים וצלע חיזוק, ומוציאים פריסה ל-DXF לחיתוך לייזר.",
 specs:[{k:"עובי",v:"3 מ״מ"},{k:"רגליים",v:"50 × 40 מ״מ"},{k:"רוחב",v:"60 מ״מ"},{k:"רדיוס כיפוף",v:"3 מ״מ"},{k:"חורים",v:"4 × Ø6.6 (ל-M6)"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש",path:"File > New > Part",actions:["Part חדש, MMGS.","הצג את לשונית Sheet Metal: קליק ימני על הלשוניות ובחר Sheet Metal."],tip:"",check:""},
  {phase:"סקיצה",title:"סקיצת L פתוחה",path:"Front Plane > Sketch > Line",actions:["קו אנכי באורך 50 מהראשית כלפי מעלה, וקו אופקי באורך 40 מהראשית ימינה.","אל תסגור את הצורה: סקיצה פתוחה."],tip:"",check:""},
  {phase:"פיצ׳ר",title:"Base Flange",path:"Sheet Metal > Base Flange/Tab",actions:["Direction 1: Mid Plane, 60 מ״מ.","Thickness 3 מ״מ, Bend Radius 3 מ״מ.","בדוק שהעובי פונה פנימה. אם לא, לחץ Reverse direction.","K-Factor 0.44, או הערך שהספק שלך עובד איתו."],tip:"K-Factor קובע את אורך הפריסה. כדאי לבקש את הערך מבית המלאכה שמכופף.",check:"נוצרה תושבת L עם כיפוף מעוגל, ובעץ מופיעים Sheet-Metal ו-Flat-Pattern."},
  {phase:"חורים",title:"שני חורים בכל רגל",path:"Features > Hole Wizard",actions:["Hole Type: Hole, ISO, Size M6, Fit: Normal (Ø6.6), Through All.","Positions: על הרגל האנכית שתי נקודות, 15 מ״מ מכל צד וגובה 30 מ״מ מהבסיס.","חזור על אותו הדבר ברגל האופקית: 15 מ״מ מהצדדים ו-25 מ״מ מהכיפוף."],tip:"שמור מרחק של לפחות 2.5 עוביים בין חור לכיפוף, אחרת החור יתעוות בכיפוף.",check:"יש 4 חורים."},
  {phase:"חיזוק",title:"צלע חיזוק בכיפוף",path:"Sheet Metal > Sheet Metal Gusset",actions:["בחר את שני הפנים הפנימיים של ה-L.","Profile: עומק 15 מ״מ, רוחב 6 מ״מ.","מיקום: באמצע הרוחב (Offset 0)."],tip:"",check:"יש חריץ חיזוק בכיפוף."},
  {phase:"ייצור",title:"פריסה ו-DXF",path:"FeatureManager > Flat-Pattern (Unsuppress)",actions:["קליק ימני על Flat-Pattern ובחר Unsuppress כדי לראות את הפריסה.","קליק ימני על Flat-Pattern ובחר Export to DXF/DWG, ואחר כך בחר Sheet metal ו-Geometry ו-Bend lines.","החזר את Flat-Pattern ל-Suppress."],tip:"",check:"נוצר קובץ DXF עם קו כיפוף."},
  {phase:"גימור",title:"חומר",path:"Material > Edit Material",actions:["Steel > Galvanized Steel, או AISI 304 לנירוסטה.","שמור."],tip:"",check:""}
 ],
 final:{result:"תושבת L מפח עם 4 חורים, חיזוק ופריסה לחיתוך.",next:["צור שרטוט עם מבט פריסה ו-Bend Table.","נסה Edge Flange כדי להוסיף שוליים צדדיים לקשיחות."]}
},
{
 id:"shaft", cat:"basic", icon:"━",
 title:"ציר מדורג עם חריץ שגם וחור פין",
 summary:"פרופיל חצי-ציר על Front Plane שמסובבים עם Revolve, ואחר כך חריץ שגם על מישור משיק, חור פין רוחבי, חריץ לטבעת ניצרה וקיטומים.",
 specs:[{k:"קטרים",v:"Ø20 / Ø25 / Ø20"},{k:"אורך כולל",v:"150 מ״מ"},{k:"שגם",v:"6×3.5×30"},{k:"פין",v:"Ø5"},{k:"חריץ ניצרה",v:"Ø19 × 1.3"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם Shaft."],tip:"",check:""},
  {phase:"סקיצה",title:"פרופיל חצי ציר",path:"Front Plane > Sketch",actions:["צייר Centerline אופקי מהראשית באורך 150.","מעליו צייר פרופיל מדרגות: גובה 10 לאורך 80, עלייה לגובה 12.5 לאורך 20, ירידה לגובה 10 לאורך 50, וסגירה חזרה לציר.","קבע מידות. טיפ: מידה מהציר לקו, כשהעכבר עובר לצד השני של הציר, מציגה קוטר."],tip:"כשמודדים מ-Centerline לקו ומעבירים את העכבר מעבר לציר, SolidWorks נותן מידת קוטר (Ø) ולא רדיוס.",check:"פרופיל סגור ומוגדר לגמרי."},
  {phase:"פיצ׳ר",title:"Revolve",path:"Features > Revolved Boss/Base",actions:["ציר: ה-Centerline, 360°."],tip:"",check:"יש ציר מדורג."},
  {phase:"שגם",title:"מישור משיק לגליל",path:"Features > Reference Geometry > Plane",actions:["First reference: הפאה הגלילית של החלק Ø20 הארוך, עם Tangent.","Second reference: Top Plane, עם Parallel."],tip:"",check:"נוצר מישור שנוגע בגליל מלמעלה."},
  {phase:"שגם",title:"חריץ שגם",path:"Sketch on Plane1 > Straight Slot",actions:["סקיצה על המישור החדש: Straight Slot באורך 30 (בין מרכזים 24) וברוחב 6, ממורכז על הציר, 10 מ״מ מקצה הציר.","Extruded Cut, Blind, עומק 3.5, לכיוון הציר."],tip:"",check:"יש חריץ שגם מעוגל בקצוות."},
  {phase:"פין",title:"חור פין רוחבי",path:"Top Plane > Sketch > Circle",actions:["סקיצה על Top Plane: מעגל Ø5 על הציר, 15 מ״מ מהקצה השני.","Extruded Cut, Through All - Both."],tip:"",check:"יש חור שעובר דרך הציר."},
  {phase:"ניצרה",title:"חריץ לטבעת ניצרה",path:"Front Plane > Sketch > Revolved Cut",actions:["סקיצה על Front Plane: מלבן ברוחב 1.3 מ״מ ועומק 0.5 מ״מ (מקוטר 20 עד 19), 5 מ״מ ממדרגת הכתף.","Revolved Cut סביב הציר."],tip:"",check:"יש חריץ היקפי דק."},
  {phase:"גימור",title:"קיטומים וחומר",path:"Features > Chamfer",actions:["Chamfer 1×45° בשני קצוות הציר, ו-0.5×45° בכתף.","Material: Steel > AISI 1045.","שמור."],tip:"",check:"Mass Properties: כ-400 גרם."}
 ],
 final:{result:"ציר מדורג מוכן להרכבה עם גלגל שיניים או מאיץ.",next:["בשרטוט הוסף סבולות (h6 במקומות של המיסבים) ו-Surface Finish."]}
},
{
 id:"spring", cat:"basic", icon:"〰️",
 title:"קפיץ לחיצה עם קצוות שטוחים",
 summary:"מסלול סליל (Helix), פרופיל מעגלי ו-Sweep, ובסוף חיתוך הקצוות לשטוחים.",
 specs:[{k:"קוטר תיל",v:"2 מ״מ"},{k:"קוטר ממוצע",v:"18 מ״מ"},{k:"אורך חופשי",v:"50 מ״מ"},{k:"כריכות",v:"8"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם Spring."],tip:"",check:""},
  {phase:"מסלול",title:"מעגל בסיס",path:"Top Plane > Sketch > Circle",actions:["מעגל Ø18 מהראשית (הקוטר הממוצע של הקפיץ).","צא מהסקיצה בלי Extrude."],tip:"",check:""},
  {phase:"מסלול",title:"Helix",path:"Features > Curves > Helix and Spiral",actions:["כשהסקיצה מסומנת, לחץ Helix and Spiral.","Defined by: Height and Revolution, Height 52, Revolutions 8.","Start angle: 0°, Clockwise."],tip:"לקפיץ עם קצוות סגורים בחר Variable Pitch ושים פסיעה 2 בכריכה הראשונה ובאחרונה.",check:"נוצר סליל צהוב."},
  {phase:"פרופיל",title:"פרופיל התיל",path:"Right Plane > Sketch > Circle",actions:["סקיצה על Right Plane: מעגל Ø2.","בחר את מרכז המעגל ואת הסליל, והוסף קשר Pierce."],tip:"Pierce מצמיד את המעגל לנקודת ההתחלה של הסליל. בלעדיו ה-Sweep ייכשל.",check:"המעגל יושב בדיוק על תחילת הסליל."},
  {phase:"פיצ׳ר",title:"Sweep",path:"Features > Swept Boss/Base",actions:["Profile: סקיצת המעגל, Path: הסליל.","אשר."],tip:"אם יש שגיאת חיתוך עצמי, הפסיעה קטנה מקוטר התיל. הגדל את הגובה או הקטן את מספר הכריכות.",check:"יש קפיץ תלת-ממדי."},
  {phase:"גימור",title:"קצוות שטוחים",path:"Front Plane > Sketch > Extruded Cut",actions:["סקיצה על Front Plane: מלבן רחב שמכסה את 1 המ״מ התחתון (מתחת לגובה 0) ומלבן שמעל גובה 50.","Extruded Cut, Through All - Both."],tip:"",check:"הקפיץ עומד ישר וגובהו 50 מ״מ."},
  {phase:"גימור",title:"חומר",path:"Material > Edit Material",actions:["Steel > Alloy Steel (או Spring steel אם יש לך בספרייה).","שמור."],tip:"",check:""}
 ],
 final:{result:"קפיץ לחיצה עם קצוות שטוחים.",next:["כדי שהקפיץ יתכווץ במכלול: Insert > Features > Flex, או קונפיגורציות בגבהים שונים."]}
},
{
 id:"impeller", cat:"hvac", icon:"🌀",
 title:"מאיץ צנטריפוגלי (Impeller) עם להבים כפופים לאחור",
 summary:"דיסקה אחורית, טבור (Hub), דיסקה קדמית חרוטית (Shroud) עם עין יניקה, ולהבים כפופים לאחור שמשוכפלים סביב הציר. בסוף בדיקת מרכז מסה לאיזון.",
 specs:[{k:"קוטר חיצוני",v:"Ø200 מ״מ"},{k:"עין יניקה",v:"Ø80 מ״מ"},{k:"מספר להבים",v:"7"},{k:"עובי להב",v:"3 מ״מ"},{k:"רוחב בכניסה / ביציאה",v:"30 / 20 מ״מ"},{k:"קדח",v:"Ø20 + שגם 6"},{k:"חומר",v:"אלומיניום 6061"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש ומשתנים",path:"Tools > Equations",actions:["Part חדש, MMGS, ושמור בשם Impeller_D200.","Tools > Equations: הוסף Global Variables: D2 = 200, D1 = 80, Z = 7, t = 3.","מעכשיו כשמזינים מידה אפשר לכתוב =\"D2\"."],tip:"משתנים גלובליים מאפשרים לשנות את גודל המאיץ כולו מתוך מקום אחד.",check:"המשתנים מופיעים בתיקייה Equations בעץ."},
  {phase:"גוף",title:"דיסקה אחורית",path:"Top Plane > Sketch > Circle",actions:["מעגל Ø200 מהראשית.","Extruded Boss/Base: 4 מ״מ כלפי מטה (Reverse)."],tip:"",check:"יש דיסקה בעובי 4, והפאה העליונה שלה בגובה 0."},
  {phase:"גוף",title:"טבור (Hub)",path:"Top Plane > Sketch > Circle",actions:["מעגל Ø40 מהראשית.","Extruded Boss/Base: 25 מ״מ כלפי מעלה."],tip:"",check:""},
  {phase:"גוף",title:"דיסקה קדמית (Shroud)",path:"Front Plane > Sketch > Revolved Boss/Base",actions:["סקיצה על Front Plane עם Centerline אנכי מהראשית.","צייר קו שמתחיל ברדיוס 40 (קצה עין היניקה) בגובה 30, ויורד ברדיוס 100 לגובה 20.","Revolved Boss/Base סביב ה-Centerline, וסמן Thin Feature בעובי 3 מ״מ כלפי מעלה.","בטל את הסימון של Merge result, כדי שהדיסקה תהיה גוף נפרד בשלב זה."],tip:"גוף נפרד מאפשר להאריך את הלהבים עד הפאה הפנימית שלו (Up To Body).",check:"יש חרוט דק מעל הדיסקה האחורית, עם פתח Ø80 במרכז."},
  {phase:"להבים",title:"סקיצת להב כפוף לאחור",path:"Sketch on back plate top face",actions:["סקיצה על הפאה העליונה של הדיסקה האחורית.","צייר 3 Point Arc מנקודה ברדיוס 45 עד נקודה ברדיוס 98. הקשת כפופה נגד כיוון הסיבוב.","קבע זווית כניסה של כ-30° וזווית יציאה של כ-40° יחסית למשיק להיקף (Angle dimension בין הקשת לקו עזר משיק).","Offset Entities: 3 מ״מ, וסמן Cap ends ו-Arcs."],tip:"להבים כפופים לאחור נותנים יעילות גבוהה ועקומת הספק שלא מעמיסה יתר על המנוע. כיוון הסיבוב: הלהב 'בורח' מהכיוון שבו המאיץ מסתובב.",check:"יש פרופיל סגור בצורת בננה דקה."},
  {phase:"להבים",title:"Extrude עד הדיסקה הקדמית",path:"Features > Extruded Boss/Base",actions:["Direction 1: Up To Body, ובחר את גוף ה-Shroud.","Merge result: מסומן."],tip:"אם Up To Body לא זמין, השתמש ב-Up To Surface ובחר את הפאה התחתונה של ה-Shroud.",check:"הלהב נוגע בדיוק בדיסקה הקדמית, וגובהו יורד מ-30 ל-20."},
  {phase:"להבים",title:"שכפול 7 להבים",path:"Features > Linear Pattern ▾ > Circular Pattern",actions:["Axis: הציר הזמני (View > Hide/Show > Temporary Axes) או קצה מעגלי של הטבור.","Equal spacing, 360°, 7 מופעים (או =\"Z\").","Features: הלהב."],tip:"מספר להבים אי-זוגי מפחית רעידות מתהודה עם צלעות הבית.",check:"7 להבים שווים."},
  {phase:"איחוד",title:"איחוד גופים",path:"Insert > Features > Combine",actions:["Combine, Operation: Add.","בחר את כל הגופים בתיקייה Solid Bodies."],tip:"",check:"בתיקייה Solid Bodies יש גוף אחד בלבד."},
  {phase:"קדח",title:"קדח ושגם",path:"Top Plane > Sketch",actions:["מעגל Ø20 ומלבן ברוחב 6 לשגם (t2 = 2.8).","Extruded Cut, Through All - Both."],tip:"",check:""},
  {phase:"פרטים",title:"רדיוסים בשורש הלהבים",path:"Features > Fillet",actions:["Fillet של 1.5 מ״מ בקצוות שבין הלהבים לדיסקה האחורית.","Fillet של 1 מ״מ בין הלהבים ל-Shroud."],tip:"רדיוסים מורידים מאמצים בסיבוב מהיר. אם ה-Fillet נכשל, עשה אותו לפני ה-Circular Pattern ושכפל את שניהם יחד.",check:""},
  {phase:"בדיקה",title:"חומר ובדיקת איזון",path:"Evaluate > Mass Properties",actions:["Material: Aluminum Alloys > 6061 Alloy.","Evaluate > Mass Properties: מרכז המסה צריך להיות על ציר הסיבוב (X ו-Z קרובים ל-0).","Evaluate > Section Properties או View > Section View כדי לבדוק את המעבר."],tip:"",check:"X ו-Z של מרכז המסה כמעט אפס, ולכן המאיץ מאוזן גאומטרית."}
 ],
 final:{result:"מאיץ צנטריפוגלי Ø200 עם 7 להבים כפופים לאחור, מוכן להרכבה בבית מפוח.",next:["המשך למדריך 'מפוח צנטריפוגלי' ושלב את המאיץ בבית ספירלי.","הרץ Flow Simulation (אם יש רישיון) למציאת עקומת לחץ-ספיקה."]}
},
{
 id:"axial-fan", cat:"hvac", icon:"🪭",
 title:"מאוורר צירי (Axial Fan) עם 5 להבים מעוותים",
 summary:"טבור עם חרטום, שני חתכי להב (בשורש ובקצה) בזוויות שונות, Loft ביניהם ליצירת להב מעוות (Twist), חיתוך לקוטר הסופי ו-Circular Pattern.",
 specs:[{k:"קוטר",v:"Ø400 מ״מ"},{k:"טבור",v:"Ø120 × 60 מ״מ"},{k:"להבים",v:"5"},{k:"זווית בשורש / בקצה",v:"35° / 15°"},{k:"מיתר בשורש / בקצה",v:"70 / 100 מ״מ"},{k:"ציר",v:"Ø14 עם שטוח D"}],
 steps:[
  {phase:"הכנה",title:"קובץ חדש וכיוון",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם AxialFan_D400.","מוסכמה: ציר המאוורר הוא ציר Y (ניצב ל-Top Plane), והלהבים יוצאים בכיוון X."],tip:"",check:""},
  {phase:"טבור",title:"טבור עם חרטום",path:"Front Plane > Sketch > Revolved Boss/Base",actions:["Centerline אנכי מהראשית.","פרופיל: קו אופקי ברדיוס 60 מגובה 0 עד גובה 60, ואחריו קשת חרטום עד הציר בגובה 90.","Revolved Boss/Base 360°."],tip:"החרטום מכוון את האוויר ומפחית מערבולות במרכז.",check:"יש טבור גלילי עם כיפה."},
  {phase:"להב",title:"מישורי חתך",path:"Features > Reference Geometry > Plane",actions:["Plane1: מקביל ל-Right Plane, Offset 55 מ״מ (קצת בתוך הטבור).","Plane2: מקביל ל-Right Plane, Offset 205 מ״מ (קצת מעבר לקוטר הסופי)."],tip:"מתחילים בתוך הטבור ומסיימים מחוץ לקוטר, כדי שהחיבור יהיה נקי ושהחיתוך בסוף יקבע את הקוטר המדויק.",check:""},
  {phase:"להב",title:"חתך בשורש",path:"Plane1 > Sketch",actions:["סקיצה על Plane1 (הסתכל עם Normal To).","Centerline באורך 70, שמרכזו בגובה 30 (אמצע הטבור), בזווית 35° לאופק.","3 Point Arc בין קצות ה-Centerline, עם קשת (Camber) של כ-5 מ״מ.","Offset Entities של 4 מ״מ עם Cap ends ו-Arcs, כדי לקבל עובי."],tip:"",check:"יש פרופיל קשת סגור ונטוי ב-35°."},
  {phase:"להב",title:"חתך בקצה",path:"Plane2 > Sketch",actions:["אותו הדבר על Plane2: מיתר 100, זווית 15°, קשת 3 מ״מ, עובי 2.5 מ״מ.","המרכז בגובה 30, באותו קו של החתך הראשון."],tip:"הזווית קטנה ככל שמתרחקים מהמרכז, כי המהירות ההיקפית גדלה. זה ה-Twist שמאפשר ללהב לעבוד ביעילות לכל אורכו.",check:""},
  {phase:"להב",title:"Loft",path:"Features > Lofted Boss/Base",actions:["Profiles: בחר את שתי הסקיצות בנקודות מקבילות (למשל קצה ה-Leading edge בשתיהן).","בדוק את הנקודות הירוקות (Connectors). אם הלהב נראה מסובב או מקופל, גרור אותן לנקודות תואמות.","Merge result: מסומן."],tip:"",check:"יש להב חלק שמתעוות מ-35° ל-15°."},
  {phase:"להב",title:"חיתוך לקוטר 400",path:"Top Plane > Sketch > Extruded Cut",actions:["סקיצה על Top Plane: מעגל Ø400 מהראשית ומעגל גדול יותר (Ø500) מסביב.","Extruded Cut, Through All - Both. נחתך רק מה שבין שני המעגלים."],tip:"",check:"קצה הלהב מעוגל בדיוק ברדיוס 200."},
  {phase:"להב",title:"רדיוס בשורש",path:"Features > Fillet",actions:["Fillet של 3 מ״מ בין הלהב לטבור."],tip:"",check:""},
  {phase:"להב",title:"שכפול 5 להבים",path:"Features > Circular Pattern",actions:["Axis: ציר זמני של הטבור.","Equal spacing, 360°, 5 מופעים, ובחר את ה-Loft, החיתוך וה-Fillet."],tip:"",check:"יש 5 להבים זהים."},
  {phase:"ציר",title:"קדח עם שטוח D",path:"Top Plane > Sketch",actions:["מעגל Ø14 וקו מיתר במרחק 6 מ״מ מהמרכז. Trim את הקטע הקטן.","Extruded Cut לעומק 50 מלמטה."],tip:"",check:""},
  {phase:"בדיקה",title:"חומר ובדיקות",path:"Evaluate > Mass Properties",actions:["Material: Plastics > PP (פוליפרופילן) או Aluminum 6061.","Mass Properties: מרכז המסה על ציר Y.","Evaluate > Check כדי לוודא שאין גאומטריה פגומה."],tip:"",check:""}
 ],
 final:{result:"מאוורר צירי Ø400 עם 5 להבים מעוותים.",next:["הוסף טבעת חיצונית (Shroud) או מסגרת ריבועית עם 4 חורי הרכבה.","Flow Simulation: Rotating Region להפקת עקומת ספיקה."]}
},
{
 id:"blower", cat:"hvac", icon:"💨",
 title:"מפוח צנטריפוגלי: בית ספירלי (Volute) ומכלול",
 summary:"בונים בית ספירלי בשיטת ארבע הקשתות, מוסיפים Shell, פתח יניקה, אוגן יציאה ותושבת מנוע, ומרכיבים במכלול עם המאיץ מהמדריך הקודם.",
 specs:[{k:"מתאים למאיץ",v:"Ø200 (מדריך המאיץ)"},{k:"מרווח לשון (Cutoff)",v:"10 מ״מ"},{k:"רוחב פנימי",v:"45 מ״מ"},{k:"יציאה",v:"160 × 45 מ״מ"},{k:"עובי דופן",v:"2 מ״מ"},{k:"יניקה",v:"Ø85 מ״מ"}],
 steps:[
  {phase:"הכנה",title:"קובץ בית חדש",path:"File > New > Part",actions:["Part חדש, MMGS, ושמור בשם Volute.","מוסכמה: ציר המפוח ניצב ל-Front Plane."],tip:"",check:""},
  {phase:"ספירלה",title:"ריבוע עזר לארבע הקשתות",path:"Front Plane > Sketch",actions:["צייר ריבוע Construction בצלע 12.5 מ״מ, כשפינה אחת שלו בראשית.","כל פינה תהיה מרכז של קשת אחת. כך הרדיוס גדל ב-12.5 בכל רבע סיבוב."],tip:"שיטת ארבע הקשתות מקרבת ספירלה לוגריתמית בקלות, וזה מספיק לבית מפוח.",check:""},
  {phase:"ספירלה",title:"ארבע קשתות משיקות",path:"Sketch > Centerpoint Arc",actions:["קשת 1: מרכז בראשית, R = 110, 90°.","קשת 2: מרכז בפינה הבאה של הריבוע, R = 122.5, משיקה לקשת 1, 90°.","קשת 3: R = 135. קשת 4: R = 147.5.","הוסף Tangent בכל מעבר בין קשתות."],tip:"R = 110 נותן מרווח של 10 מ״מ מהמאיץ (רדיוס 100) בנקודת הלשון.",check:"יש קו ספירלי רציף שמתרחב."},
  {phase:"ספירלה",title:"יציאה ולשון",path:"Sketch > Line",actions:["מסוף קשת 4 צייר קו ישר משיק כלפי מעלה עד גובה היציאה (זה הקיר החיצוני של הפתח).","מתחילת קשת 1 צייר קו מקביל כלפי מעלה במרחק 160 מהקו הקודם. זה קיר הלשון.","סגור למעלה בקו אופקי (פתח היציאה).","Sketch Fillet של 8 מ״מ בנקודת הלשון."],tip:"רדיוס בלשון מפחית רעש (Blade-pass noise) באופן משמעותי.",check:"פרופיל סגור בצורת חילזון עם צוואר יציאה."},
  {phase:"גוף",title:"Extrude לבית",path:"Features > Extruded Boss/Base",actions:["Blind, 49 מ״מ (45 פנימי ועוד 2+2 דפנות)."],tip:"",check:"יש גוף מלא בצורת חילזון."},
  {phase:"גוף",title:"Shell",path:"Features > Shell",actions:["Thickness: 2 מ״מ.","Faces to remove: הפאה העליונה של פתח היציאה בלבד."],tip:"",check:"הבית חלול ופתוח ביציאה."},
  {phase:"יניקה",title:"פתח יניקה עם צווארון",path:"Sketch on front face",actions:["סקיצה על הפאה הקדמית: מעגל Ø85 מהראשית, ו-Extruded Cut Through All על הדופן הקדמית בלבד (Up To Next).","צווארון: מעגלים Ø85 ו-Ø89, Extrude החוצה 15 מ״מ."],tip:"פתח היניקה (Ø85) קצת גדול מעין המאיץ (Ø80) ונכנס מעליה. זה מקטין דליפה חזרה.",check:""},
  {phase:"גוף",title:"חור ציר ותושבת מנוע",path:"Sketch on back face",actions:["על הדופן האחורית: חור Ø25 במרכז.","4 חורי M6 על מעגל Ø100 (Hole Wizard ו-Circular Sketch Pattern) להרכבת מנוע."],tip:"",check:""},
  {phase:"יציאה",title:"אוגן יציאה",path:"Sketch on outlet face",actions:["סקיצה על שפת היציאה: Convert Entities לקצה הפנימי ו-Offset 20 החוצה.","Extrude 3 מ״מ.","Hole Wizard: חורי Ø7 בכל פינה ובאמצע הצלעות הארוכות."],tip:"",check:"יש מסגרת שטוחה סביב היציאה, עם חורים."},
  {phase:"מכלול",title:"מכלול: בית, מאיץ, מנוע",path:"File > New > Assembly",actions:["Assembly חדש: הכנס את Volute. הוא Fixed אוטומטית.","הכנס את Impeller_D200 (ממדריך המאיץ).","Mate: Concentric בין קדח המאיץ לחור הציר בבית.","Mate: Distance של 5 מ״מ בין הדיסקה האחורית של המאיץ לדופן האחורית הפנימית.","הוסף מנוע (גליל פשוט או קובץ מ-3D ContentCentral) עם Concentric ו-Coincident לפאה האחורית."],tip:"",check:"המאיץ יושב במרכז הבית ומסתובב כשגוררים אותו."},
  {phase:"בדיקה",title:"בדיקת התנגשויות ומרווחים",path:"Evaluate > Interference Detection",actions:["Interference Detection: צריך לקבל No Interferences.","Evaluate > Clearance Verification: מרווח מינימלי בין המאיץ ללשון של 10 מ״מ.","Section View לבדיקה ויזואלית."],tip:"",check:"אין התנגשויות."},
  {phase:"גימור",title:"מבט מפוצץ ושרטוט",path:"Assembly > Exploded View",actions:["Exploded View: הזז מנוע ומאיץ לאורך הציר.","File > Make Drawing from Assembly, מבט Isometric מפוצץ.","Insert > Tables > Bill of Materials ו-Balloons."],tip:"",check:"יש שרטוט הרכבה עם רשימת חלקים."}
 ],
 final:{result:"מפוח צנטריפוגלי שלם: בית ספירלי, מאיץ ומנוע במכלול עם שרטוט.",next:["הפוך את הבית לגיליון פח (Sheet Metal > Convert to Sheet Metal) לייצור.","Flow Simulation להפקת עקומת מפוח."]}
},
{
 id:"cooling-coil", cat:"hvac", icon:"❄️",
 title:"סוללת קירור (Fin & Tube Cooling Coil)",
 summary:"בונים סוללה של 4 שורות × 12 צינורות במבנה מדורג: לוחות קצה מפח, צינורות נחושת, צלעות אלומיניום, קשתות החזרה (U-bends) וקולטנים. במכלול משתמשים ב-Pattern Driven Pattern כדי לא להציב 48 צינורות אחד אחד.",
 specs:[{k:"צינור",v:"3/8\" (Ø9.52 × 0.35) נחושת"},{k:"פסיעה אנכית (Pt)",v:"25.4 מ״מ"},{k:"פסיעה בין שורות (Pr)",v:"22 מ״מ"},{k:"שורות × צינורות",v:"4 × 12 מדורג"},{k:"אורך מצולע",v:"600 מ״מ"},{k:"צלעות",v:"אלומיניום 0.15 מ״מ, פסיעה 2.5 (10 FPI)"},{k:"גובה × עומק",v:"≈305 × 88 מ״מ"}],
 steps:[
  {phase:"תכנון",title:"פרויקט ומשתנים",path:"Tools > Equations",actions:["צור תיקייה Coil, וכל החלקים יישמרו בה.","בכל חלק הגדר Global Variables: L = 600, Pt = 25.4, Pr = 22, N = 12, R = 4, FP = 2.5.","מבנה: לוח קצה, צינור, צלע, U-bend וקולטן, כל אחד כחלק נפרד, ומכלול שמחבר אותם."],tip:"אפשר להשתמש ב-Link to external file ב-Equations כדי שכל החלקים יקראו את אותו קובץ TXT. שינוי אחד מעדכן הכול.",check:""},
  {phase:"לוח קצה",title:"לוח קצה מפח (Tube Sheet)",path:"Sheet Metal > Base Flange/Tab",actions:["Part חדש בשם TubeSheet. סקיצה על Front Plane: מלבן 100 × 330.","Base Flange בעובי 1.5 מ״מ.","Edge Flange של 25 מ״מ בשתי הצלעות הארוכות (להרכבה לתעלה)."],tip:"",check:""},
  {phase:"לוח קצה",title:"פריסת חורים מדורגת",path:"Sketch > Point + Linear Sketch Pattern",actions:["סקיצה על הפאה: נקודה ראשונה ב-X = 17, Y = 25.","Linear Sketch Pattern אנכי: 12 מופעים במרווח 25.4.","עמודה שנייה: נקודה ב-X = 17 + 22, Y = 25 + 12.7 (חצי פסיעה), ו-12 מופעים.","שכפל עוד שתי עמודות. בסך הכול 4 עמודות ו-48 נקודות."],tip:"המבנה המדורג (Staggered) מגביר את מעבר החום ב-15% עד 20% לעומת שורות ישרות.",check:"יש 48 נקודות במבנה 'לבנים'."},
  {phase:"לוח קצה",title:"חורים בבת אחת",path:"Features > Hole Wizard",actions:["Hole: קוטר מותאם 9.8 מ״מ, Through All.","בלשונית Positions בחר את כל 48 הנקודות (Box select)."],tip:"",check:"48 חורים בפיצ׳ר אחד. זה חשוב לשלב המכלול."},
  {phase:"צינור",title:"חלק צינור",path:"Right Plane > Sketch > Extrude (Thin)",actions:["Part חדש בשם Tube. מעגל Ø9.52 ו-Extrude באורך 606 (600 ועוד 3 מכל צד, לחיבור).","סמן Thin Feature בעובי 0.35 פנימה.","Material: Copper."],tip:"",check:""},
  {phase:"צלע",title:"חלק צלע",path:"Front Plane > Sketch",actions:["Part חדש בשם Fin. העתק את סקיצת 48 הנקודות מלוח הקצה (Ctrl+C / Ctrl+V על המישור).","מלבן 88 × 305, Extrude בעובי 0.15.","Hole Wizard של Ø9.6 בכל הנקודות.","Material: Aluminum 1100."],tip:"",check:""},
  {phase:"U-bend",title:"קשת החזרה (U-bend)",path:"Features > Swept Boss/Base",actions:["Part חדש בשם UBend. מסלול: חצי עיגול ברדיוס 12.7 (Pt/2) על Top Plane.","פרופיל: מעגל Ø9.52 על Front Plane בקצה המסלול (Pierce).","Sweep עם Thin Feature של 0.35.","Material: Copper."],tip:"U-bend מחבר שני צינורות סמוכים באותה עמודה (25.4 מ״מ ביניהם).",check:"יש צינור בצורת U."},
  {phase:"מכלול",title:"לוחות קצה במכלול",path:"File > New > Assembly",actions:["Assembly חדש בשם Coil_4R_12T. הכנס TubeSheet (Fixed).","הכנס TubeSheet שני: Mates של Parallel, Concentric בין חור לחור, ו-Distance של 600 בין הפאות הפנימיות."],tip:"",check:""},
  {phase:"מכלול",title:"48 צינורות בלחיצה אחת",path:"Insert > Component Pattern > Pattern Driven",actions:["הכנס Tube אחד: Concentric לחור הראשון ו-Distance של 3 מ״מ בין קצה הצינור לפאה החיצונית.","Insert > Component Pattern > Pattern Driven Component Pattern.","Components: הצינור. Driving Feature: פיצ׳ר ה-Hole Wizard של הלוח."],tip:"Pattern Driven יוצר צינור בכל חור שה-Hole Wizard יצר. אם תשנה את הפריסה בלוח, הצינורות יתעדכנו לבד.",check:"יש 48 צינורות בין שני הלוחות."},
  {phase:"מכלול",title:"צלעות (בחכמה)",path:"Insert > Component Pattern > Linear",actions:["הכנס Fin: Concentric לשני צינורות ו-Distance של 5 מ״מ מהלוח.","Linear Component Pattern לאורך ציר הצינור: מרווח 2.5. לסוללה מלאה: 236 מופעים.","מומלץ: צור קונפיגורציה Display עם 20 צלעות בלבד, ו-Full עם כולן."],tip:"236 צלעות × 48 חורים זה מודל כבד מאוד. לעבודה שוטפת השתמש בקונפיגורציה מצומצמת, ב-Large Design Review או ב-SpeedPak.",check:""},
  {phase:"מכלול",title:"U-bends ומעגלי זרימה",path:"Insert > Component Pattern > Linear",actions:["הכנס UBend בצד אחד: שני Concentric לשני צינורות סמוכים באותה עמודה.","Linear Component Pattern אנכי: מרווח 50.8, 6 מופעים. בצד השני השתמש בהזזה של צינור אחד.","שכפל לכל 4 העמודות. בכל צד מחברים זוגות אחרים, וכך נוצר מסלול נחש."],tip:"קבע מראש את מספר המעגלים (Circuits). למשל 6 מעגלים במקביל, כל אחד עובר בכל ה-4 שורות, לאיזון בין מפל לחץ למעבר חום.",check:"יש מסלול זרימה רציף מכניסה ליציאה."},
  {phase:"מכלול",title:"קולטנים (Headers)",path:"File > New > Part",actions:["Part בשם Header: צינור Ø28 × 1 באורך 320, עם 6 חורים (לפי מספר המעגלים) במרווח 50.8, ו-Extrude לצינוריות Ø9.52.","הכנס שני קולטנים: כניסה (Supply) ויציאה (Return). בצד הכניסה בבריכות קרות מצוי לרוב מפזר (Distributor)."],tip:"לצנרת מורכבת עם רישיון Premium: Routing Add-in. הוא בונה צינורות, קשתות ו-BOM אוטומטית.",check:""},
  {phase:"בדיקה",title:"בדיקות ורשימת חלקים",path:"Evaluate > Interference Detection",actions:["Interference Detection, עם Treat coincidence as interference כבוי.","Mass Properties: משקל יבש של הסוללה.","שרטוט: Bill of Materials. בדוק שיש 48 צינורות, 24 U-bends בצד אחד ו-18 בצד השני (לפי המעגלים) ו-2 קולטנים."],tip:"",check:"BOM תקין ואין התנגשויות."}
 ],
 final:{result:"סוללת קירור 4 שורות × 12 צינורות, פרמטרית, עם רשימת חלקים לייצור.",next:["הוסף מגש ניקוז (Drain pan) מפח עם שיפוע 1°.","שנה את N ו-R במשתנים כדי לקבל סוללות במידות אחרות."]}
}
];
