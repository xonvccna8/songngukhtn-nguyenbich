// Ngân hàng KHUNG CÂU (sentence frames) cho Vật lí — KHTN, theo chức năng ngôn ngữ (CLIL)
// + kĩ năng tìm hiểu tự nhiên (quan sát, dự đoán, đo đạc, thí nghiệm, kết luận).
// Mỗi khung có 3 mức: E1 (cụm ngắn) · E2 (câu đầy đủ) · E3 (câu học thuật). "___" = chỗ trống HS điền.
import type { Bi } from "@/lib/live/types";

export type FrameFn = "describe" | "compare" | "classify" | "explain" | "justify" | "conjecture" | "generalise" | "critique" | "sequence" | "ask";

export const FRAME_FNS: Record<FrameFn, Bi & { twm?: string; hint: string }> = {
  describe: { vi: "Mô tả, quan sát, đọc số đo", en: "Describing & observing", hint: "Dụng cụ, hiện tượng, số chỉ của dụng cụ đo, đồ thị" },
  compare: { vi: "So sánh", en: "Comparing", hint: "Lớn hơn, nhỏ hơn, gấp bao nhiêu lần: khối lượng riêng, áp suất, dòng điện" },
  classify: { vi: "Phân loại", en: "Classifying", hint: "Vật dẫn – cách điện, loại đòn bẩy, cách truyền nhiệt" },
  explain: { vi: "Giải thích", en: "Explaining", hint: "Vì sao xảy ra, dùng công thức nào, hoạt động thế nào" },
  justify: { vi: "Lập luận bằng bằng chứng", en: "Using evidence", hint: "Số liệu, kết quả đo, đồ thị chứng minh điều gì" },
  conjecture: { vi: "Dự đoán, đặt giả thuyết", en: "Predicting & hypothesising", hint: "Nếu tăng / giảm… thì…, điều gì sẽ xảy ra" },
  generalise: { vi: "Khái quát, liên hệ", en: "Generalising & connecting", hint: "Quy luật chung, ứng dụng kĩ thuật, an toàn, tiết kiệm năng lượng" },
  critique: { vi: "Nhận xét, phản biện", en: "Critiquing & improving", hint: "Đồng ý, không đồng ý, chỉ ra sai số, cải tiến thí nghiệm" },
  sequence: { vi: "Trình bày quá trình, thí nghiệm", en: "Describing a process or experiment", hint: "Các bước đo, cách mắc mạch, giải bài toán" },
  ask: { vi: "Hỏi, xin hỗ trợ", en: "Asking for help", hint: "Hỏi thầy cô và bạn bằng tiếng Anh" },
};

export interface Frame {
  id: string;
  fn: FrameFn;
  e1: Bi;
  e2: Bi;
  e3: Bi;
}

type Row = [e1en: string, e1vi: string, e2en: string, e2vi: string, e3en: string, e3vi: string];

const RAW: Record<FrameFn, Row[]> = {
  describe: [
    ["It is a ___.", "Đây là ___.", "This is a ___. We use it to measure ___.", "Đây là ___. Ta dùng nó để đo ___.", "This instrument is a ___; it measures ___ in ___.", "Dụng cụ này là ___; nó đo ___ theo đơn vị ___."],
    ["I see ___.", "Em thấy ___.", "When we ___, I can see that ___.", "Khi ta ___, em thấy ___.", "As we ___, we observed that ___ gradually ___.", "Khi ta ___, chúng em quan sát thấy ___ dần dần ___."],
    ["The reading is ___.", "Số chỉ là ___.", "The ammeter reads ___ amperes.", "Ampe kế chỉ ___ ampe.", "The reading on the ___ is ___ ___, with a range of ___.", "Số chỉ của ___ là ___ ___, giới hạn đo là ___."],
    ["The arrow shows ___.", "Mũi tên chỉ ___.", "The force acts ___ on the ___.", "Lực tác dụng ___ lên ___.", "The force of ___ N acts ___ at point ___, as shown by the arrow.", "Lực ___ N tác dụng ___ tại điểm ___, như mũi tên biểu diễn."],
    ["It floats / sinks.", "Nó nổi / chìm.", "The ___ floats on water but the ___ sinks.", "___ nổi trên nước còn ___ thì chìm.", "The ___ floats because its density is lower than that of ___.", "___ nổi vì khối lượng riêng nhỏ hơn của ___."],
    ["The graph shows ___.", "Đồ thị cho biết ___.", "The graph shows that ___ increases when ___ increases.", "Đồ thị cho thấy ___ tăng khi ___ tăng.", "According to the graph, ___ is directly proportional to ___.", "Theo đồ thị, ___ tỉ lệ thuận với ___."],
  ],
  compare: [
    ["Same: ___. Different: ___.", "Giống: ___. Khác: ___.", "Both ___ and ___ are ___.", "Cả ___ và ___ đều là ___.", "Both ___ and ___ ___; however, only ___ ___.", "Cả ___ và ___ đều ___; tuy nhiên chỉ ___ ___."],
    ["___ is heavier.", "___ nặng hơn.", "___ has a greater density than ___.", "___ có khối lượng riêng lớn hơn ___.", "The density of ___ is about ___ times greater than that of ___.", "Khối lượng riêng của ___ lớn gấp khoảng ___ lần của ___."],
    ["More / less pressure.", "Áp suất lớn hơn / nhỏ hơn.", "A smaller area gives a ___ pressure.", "Diện tích nhỏ hơn cho áp suất ___ hơn.", "For the same force, halving the area ___ the pressure.", "Cùng một lực, giảm một nửa diện tích thì áp suất ___."],
    ["___ is brighter.", "___ sáng hơn.", "Lamp ___ is brighter than lamp ___ because ___.", "Đèn ___ sáng hơn đèn ___ vì ___.", "Lamp ___ is brighter because a larger current of ___ A flows through it.", "Đèn ___ sáng hơn vì có dòng điện lớn hơn ___ A chạy qua."],
    ["The difference is ___.", "Điểm khác là ___.", "The difference between ___ and ___ is ___.", "Điểm khác nhau giữa ___ và ___ là ___.", "The main difference between ___ and ___ is that ___.", "Điểm khác nhau chủ yếu giữa ___ và ___ là ___."],
    ["___ expands more.", "___ nở nhiều hơn.", "Gases expand more than ___ when heated.", "Chất khí nở vì nhiệt nhiều hơn ___.", "For the same temperature rise, ___ expands the most, while ___ expands the least.", "Cùng độ tăng nhiệt độ, ___ nở nhiều nhất, còn ___ nở ít nhất."],
  ],
  classify: [
    ["It is a ___.", "Nó là ___.", "___ is a ___ because it ___.", "___ là ___ vì nó ___.", "___ belongs to the group of ___ because ___ and ___.", "___ thuộc nhóm ___ vì ___ và ___."],
    ["Conductor / insulator.", "Dẫn điện / cách điện.", "___ is a conductor, but ___ is an insulator.", "___ là vật dẫn điện, còn ___ là vật cách điện.", "We tested ___ objects: ___ of them let current pass, so they are conductors.", "Chúng em thử ___ vật: ___ vật cho dòng điện đi qua nên là vật dẫn điện."],
    ["Class 1 / 2 / 3.", "Loại 1 / 2 / 3.", "A ___ is a class ___ lever because ___ is in the middle.", "___ là đòn bẩy loại ___ vì ___ nằm ở giữa.", "In a ___, the fulcrum is ___, the effort is ___ and the load is ___.", "Ở ___, điểm tựa ___, lực tác dụng ___ và lực cản ___."],
    ["Conduction / convection / radiation.", "Dẫn nhiệt / đối lưu / bức xạ.", "Heat moves through the ___ by ___.", "Nhiệt truyền qua ___ bằng ___.", "Heat reaches the ___ mainly by ___, because ___.", "Nhiệt truyền tới ___ chủ yếu bằng ___, vì ___."],
    ["Contact / non-contact.", "Tiếp xúc / không tiếp xúc.", "___ is a non-contact force because ___.", "___ là lực không tiếp xúc vì ___.", "Although the ___ does not touch the ___, it still exerts a force, so it is ___.", "Dù ___ không chạm vào ___, nó vẫn tác dụng lực nên là ___."],
    ["The odd one out is ___.", "Cái khác nhóm là ___.", "___ is the odd one out because ___.", "___ khác nhóm vì ___.", "All of them are ___ except ___, which ___.", "Tất cả đều là ___ trừ ___, vì nó ___."],
  ],
  explain: [
    ["Because ___.", "Vì ___.", "I think ___ because ___.", "Em nghĩ ___ vì ___.", "In my opinion, ___, because ___ and ___.", "Theo em, ___, vì ___ và ___."],
    ["We use ___.", "Ta dùng ___.", "We use the formula ___ to find ___.", "Ta dùng công thức ___ để tính ___.", "Using ___ = ___, we get ___ = ___ ÷ ___ = ___ ___.", "Áp dụng ___ = ___, ta có ___ = ___ : ___ = ___ ___."],
    ["Its job is ___.", "Nhiệm vụ của nó là ___.", "The ___ is used to ___.", "___ dùng để ___.", "The ___ ___, which protects the circuit when ___.", "___ ___, nhờ đó bảo vệ mạch khi ___."],
    ["So ___.", "Vậy ___.", "So, ___ happens because ___.", "Vậy, ___ xảy ra vì ___.", "Therefore, ___, which explains why ___.", "Do đó ___, điều này giải thích vì sao ___."],
    ["Air pushes ___.", "Không khí đẩy ___.", "Atmospheric pressure pushes the ___ ___.", "Áp suất khí quyển đẩy ___ ___.", "When the air pressure inside ___ decreases, the atmospheric pressure outside pushes ___.", "Khi áp suất bên trong ___ giảm, áp suất khí quyển bên ngoài đẩy ___."],
    ["Look: ___.", "Nhìn này: ___.", "From the diagram, we can see that ___.", "Từ sơ đồ, ta thấy ___.", "As shown in the circuit diagram, current flows from ___ through ___ to ___.", "Như sơ đồ mạch cho thấy, dòng điện đi từ ___ qua ___ tới ___."],
  ],
  justify: [
    ["The result shows ___.", "Kết quả cho thấy ___.", "The result shows that ___.", "Kết quả cho thấy ___.", "The results of the experiment show that ___, because ___.", "Kết quả thí nghiệm cho thấy ___, vì ___."],
    ["The evidence is ___.", "Bằng chứng là ___.", "We know this because ___.", "Ta biết điều này vì ___.", "The evidence for this is ___, which we measured when ___.", "Bằng chứng là ___, mà chúng em đo được khi ___."],
    ["The number is ___.", "Con số là ___.", "We calculated ___ = ___, so the material is ___.", "Chúng em tính được ___ = ___, vậy chất đó là ___.", "Since the measured density (___ kg/m³) is close to ___, the object is probably made of ___.", "Vì khối lượng riêng đo được (___ kg/m³) gần với ___, vật có lẽ làm bằng ___."],
    ["If ___, then ___.", "Nếu ___ thì ___.", "If ___, then ___, because ___.", "Nếu ___ thì ___, vì ___.", "Suppose that ___. Then ___, which means ___.", "Giả sử ___. Khi đó ___, nghĩa là ___."],
    ["This is true.", "Điều này đúng.", "This is true because ___.", "Điều này đúng vì ___.", "This claim is supported by ___ and ___.", "Nhận định này được chứng minh bởi ___ và ___."],
    ["The data say ___.", "Số liệu cho biết ___.", "The table shows that ___ when ___.", "Bảng số liệu cho thấy ___ khi ___.", "The data in the table suggest that ___ increases as ___ increases.", "Số liệu trong bảng cho thấy ___ tăng khi ___ tăng."],
  ],
  conjecture: [
    ["Maybe ___.", "Có lẽ ___.", "I predict that ___.", "Em dự đoán rằng ___.", "My hypothesis is that ___; we can test it by ___.", "Giả thuyết của em là ___; có thể kiểm tra bằng cách ___."],
    ["It will float / sink.", "Nó sẽ nổi / chìm.", "I think the ___ will ___ because ___.", "Em nghĩ ___ sẽ ___ vì ___.", "If we put the ___ in salty water, I expect it to ___, because ___.", "Nếu thả ___ vào nước muối, em cho rằng nó sẽ ___, vì ___."],
    ["What if ___?", "Nếu ___ thì sao?", "What happens if we increase the ___?", "Điều gì xảy ra nếu ta tăng ___?", "If we double the ___, I expect the ___ to ___.", "Nếu tăng gấp đôi ___, em cho rằng ___ sẽ ___."],
    ["We change ___.", "Ta thay đổi ___.", "In this experiment, we change ___ and keep ___ the same.", "Trong thí nghiệm này, ta thay đổi ___ và giữ nguyên ___.", "The variable we change is ___; the variable we measure is ___.", "Đại lượng thay đổi là ___; đại lượng cần đo là ___."],
    ["Test: ___.", "Thử: ___.", "Let's do an experiment to see if ___.", "Hãy làm thí nghiệm xem ___ có đúng không.", "To test this idea, we can measure ___ at ___ different ___.", "Để kiểm tra ý này, ta đo ___ ở ___ ___ khác nhau."],
    ["I am sure / not sure.", "Em chắc chắn / chưa chắc.", "I am (not) sure because ___.", "Em (chưa) chắc chắn vì ___.", "I am convinced that ___, because every time we measured it, ___.", "Em tin chắc rằng ___, vì mỗi lần đo đều ___."],
  ],
  generalise: [
    ["All ___ ___.", "Mọi ___ đều ___.", "All metals are good ___.", "Mọi kim loại đều ___ tốt.", "In general, every ___ ___ when ___.", "Nói chung, mọi ___ đều ___ khi ___."],
    ["Pattern: ___.", "Quy luật: ___.", "I notice that ___ always ___.", "Em nhận thấy ___ luôn ___.", "In every case, ___; so in general, ___.", "Trong mọi trường hợp, ___; vậy nói chung, ___."],
    ["For example, ___.", "Ví dụ, ___.", "For example, a ___ uses the ___ effect of current.", "Ví dụ, ___ dùng tác dụng ___ của dòng điện.", "A good example of ___ in daily life is ___, because ___.", "Một ví dụ điển hình của ___ trong đời sống là ___, vì ___."],
    ["In real life: ___.", "Trong thực tế: ___.", "We can use this to ___ in real life.", "Ta có thể dùng điều này để ___ trong thực tế.", "Engineers use this idea when they design ___.", "Kĩ sư dùng ý tưởng này khi thiết kế ___."],
    ["Stay safe: ___.", "An toàn: ___.", "To stay safe with electricity, we should ___.", "Để an toàn khi dùng điện, chúng ta nên ___.", "To prevent ___, people should ___ and never ___.", "Để phòng ___, mọi người nên ___ và không bao giờ ___."],
    ["Save energy: ___.", "Tiết kiệm năng lượng: ___.", "We can save energy by ___.", "Ta có thể tiết kiệm năng lượng bằng cách ___.", "Using ___ instead of ___ wastes less energy as heat.", "Dùng ___ thay cho ___ giúp hao phí ít năng lượng dưới dạng nhiệt hơn."],
  ],
  critique: [
    ["I agree.", "Em đồng ý.", "I agree with ___ because ___.", "Em đồng ý với ___ vì ___.", "I agree with ___'s idea, and I would like to add that ___.", "Em đồng ý với ý của ___, và em muốn bổ sung rằng ___."],
    ["I disagree.", "Em không đồng ý.", "I disagree with ___ because ___.", "Em không đồng ý với ___ vì ___.", "I see your point, but I think ___, because ___.", "Em hiểu ý bạn, nhưng em nghĩ ___, vì ___."],
    ["Mistake: ___.", "Lỗi sai: ___.", "The mistake is ___. It should be ___.", "Lỗi sai là ___. Đúng ra phải là ___.", "There is an error in the circuit: the ammeter should be connected ___, not ___.", "Mạch có lỗi: ampe kế phải mắc ___, không phải ___."],
    ["Fair test?", "Có công bằng không?", "This is not a fair test because ___.", "Thí nghiệm này chưa công bằng vì ___.", "To make it a fair test, we should keep ___ the same and only change ___.", "Để thí nghiệm công bằng, ta cần giữ nguyên ___ và chỉ thay đổi ___."],
    ["Better: ___.", "Tốt hơn: ___.", "A better way is to ___.", "Một cách tốt hơn là ___.", "We could reduce errors by ___ and repeating each measurement ___ times.", "Có thể giảm sai số bằng cách ___ và lặp lại mỗi phép đo ___ lần."],
    ["Good job!", "Bạn làm tốt!", "I like ___'s answer because ___.", "Em thích câu trả lời của ___ vì ___.", "___'s explanation is clear because ___; next time we could also ___.", "Phần giải thích của ___ rõ ràng vì ___; lần sau có thể ___."],
  ],
  sequence: [
    ["First ___, then ___.", "Đầu tiên ___, sau đó ___.", "First, ___. Then, ___. Finally, ___.", "Đầu tiên ___. Sau đó ___. Cuối cùng ___.", "The procedure begins with ___, continues with ___ and ends with ___.", "Quy trình bắt đầu bằng ___, tiếp theo là ___ và kết thúc bằng ___."],
    ["Measure ___.", "Đo ___.", "We measure the ___ with a ___.", "Chúng em đo ___ bằng ___.", "We measured the ___ three times and took the average: ___ ___.", "Chúng em đo ___ ba lần và lấy trung bình: ___ ___."],
    ["Connect ___.", "Mắc ___.", "Connect the ___ in series with the ___.", "Mắc ___ nối tiếp với ___.", "Connect the ___ to the ___, making sure the positive terminal faces ___.", "Nối ___ với ___, chú ý chốt dương hướng về ___."],
    ["Given: ___. Find: ___.", "Cho: ___. Tìm: ___.", "We know ___ and ___. We need to find ___.", "Ta biết ___ và ___. Cần tìm ___.", "Given ___ = ___ and ___ = ___, we use ___ to find ___.", "Cho ___ = ___ và ___ = ___, ta dùng ___ để tìm ___."],
    ["Materials: ___.", "Dụng cụ: ___.", "For this experiment, we need ___ and ___.", "Thí nghiệm này cần ___ và ___.", "We set up the apparatus: a ___ connected to ___ and a ___.", "Chúng em lắp dụng cụ: một ___ nối với ___ và một ___."],
    ["Result: ___. Conclusion: ___.", "Kết quả: ___. Kết luận: ___.", "We observed ___, so we conclude that ___.", "Chúng em quan sát thấy ___, nên kết luận rằng ___.", "After ___ minutes, ___ rose by ___ °C; therefore, we conclude that ___.", "Sau ___ phút, ___ tăng ___ °C; vì vậy chúng em kết luận ___."],
  ],
  ask: [
    ["Help, please.", "Giúp em với ạ.", "Can you help me with ___, please?", "Thầy/cô giúp em phần ___ được không ạ?", "I don't understand ___. Could you explain it again, please?", "Em chưa hiểu ___. Thầy/cô giảng lại giúp em được không ạ?"],
    ["Again, please.", "Nhắc lại giúp em ạ.", "Can you say that again, please?", "Thầy/cô nói lại được không ạ?", "Could you say it more slowly, please?", "Thầy/cô nói chậm hơn được không ạ?"],
    ["What is ___?", "___ là gì ạ?", "What does ___ mean?", "___ nghĩa là gì ạ?", "How do you say ___ in English?", "___ tiếng Anh nói thế nào ạ?"],
    ["Which unit?", "Đơn vị gì ạ?", "What is the unit of ___?", "Đơn vị của ___ là gì ạ?", "Should I change ___ into ___ before I calculate?", "Em có cần đổi ___ sang ___ trước khi tính không ạ?"],
    ["Is it right?", "Đúng không ạ?", "Is my answer correct?", "Đáp án của em đúng không ạ?", "I got ___. Is that correct, or did I make a mistake?", "Em tính được ___. Đúng không ạ, hay em sai ở đâu?"],
    ["Why?", "Tại sao ạ?", "Why does ___ happen?", "Tại sao ___ lại xảy ra ạ?", "Why does the ___ change when we ___?", "Tại sao ___ thay đổi khi ta ___ ạ?"],
  ],
};

export const FRAMES: Frame[] = (Object.keys(RAW) as FrameFn[]).flatMap((fn) =>
  RAW[fn].map(([a, b, c, d, e, f], i) => ({ id: `${fn}-${i + 1}`, fn, e1: { en: a, vi: b }, e2: { en: c, vi: d }, e3: { en: e, vi: f } }))
);
