// Mục lục SGK Khoa học tự nhiên 6–9 bộ "Kết nối tri thức với cuộc sống" — CHỈ phần Vật lí.
// Số chương, số bài giữ đúng như SGK. Lớp 8 có kho nội dung đầy đủ (câu hỏi, vở ghi, học liệu, STEM, thí nghiệm ảo);
// lớp 6, 7, 9 hiện có khung bài + YCCĐ để GV soạn bài, giao câu hỏi tự soạn.
// YCCĐ (yêu cầu cần đạt) bám theo Chương trình GDPT 2018 môn KHTN (Thông tư 32/2018/TT-BGDĐT), viết gọn cho từng bài.
// LƯU Ý: câu chữ YCCĐ và bản dịch tiếng Anh chưa đối chiếu từng chữ với văn bản gốc — tổ chuyên môn cần rà lại.
import type { Strand } from "@/lib/curriculum/types";

type RawOutcome = [vi: string, en: string];
type RawLesson = [no: number, vi: string, en: string, outcomes?: RawOutcome[]];
type RawChapter = [no: number, strand: Strand, vi: string, en: string, lessons: RawLesson[]];

export const KNTT: Record<number, RawChapter[]> = {
  // ===================== LỚP 6 =====================
  6: [
    [1, "do", "Mở đầu về Khoa học tự nhiên – Phép đo", "Introduction to natural science – Measurement", [
      [5, "Đo chiều dài", "Measuring length", [
        ["Nêu được đơn vị đo chiều dài; ước lượng được chiều dài trước khi đo.", "State units of length and estimate a length before measuring."],
        ["Dùng thước đo được chiều dài đúng cách; nêu được cách khắc phục một số thao tác sai.", "Measure length correctly with a ruler and fix common mistakes."],
      ]],
      [6, "Đo khối lượng", "Measuring mass", [
        ["Nêu được đơn vị đo khối lượng; dùng cân đo được khối lượng của vật.", "State units of mass and measure mass with a balance."],
      ]],
      [7, "Đo thời gian", "Measuring time", [
        ["Nêu được đơn vị đo thời gian; dùng đồng hồ đo được thời gian.", "State units of time and measure time with a clock or stopwatch."],
      ]],
      [8, "Đo nhiệt độ", "Measuring temperature", [
        ["Phát biểu được: nhiệt độ là số đo độ \"nóng\", \"lạnh\" của vật; nêu được các thang nhiệt độ Celsius, Kelvin, Fahrenheit.", "State that temperature measures how hot or cold an object is; name the Celsius, Kelvin and Fahrenheit scales."],
        ["Dùng nhiệt kế đo được nhiệt độ đúng cách.", "Measure temperature correctly with a thermometer."],
      ]],
    ]],
    [8, "lu", "Lực trong đời sống", "Forces in everyday life", [
      [40, "Lực là gì?", "What is a force?", [
        ["Lấy được ví dụ chứng tỏ lực là sự đẩy hoặc kéo; lực làm thay đổi tốc độ, hướng chuyển động, làm biến dạng vật.", "Give examples showing a force is a push or a pull that can change speed, direction or shape."],
        ["Phân biệt được lực tiếp xúc và lực không tiếp xúc.", "Tell apart contact and non-contact forces."],
      ]],
      [41, "Biểu diễn lực", "Representing forces", [
        ["Biểu diễn được một lực bằng mũi tên có điểm đặt, hướng và độ dài tỉ lệ với độ lớn của lực.", "Draw a force as an arrow showing its point of application, direction and size."],
      ]],
      [42, "Biến dạng của lò xo", "Stretching a spring", [
        ["Thực hiện được thí nghiệm chứng tỏ độ giãn của lò xo treo thẳng đứng tỉ lệ với khối lượng vật treo.", "Show by experiment that the extension of a hanging spring is proportional to the hanging mass."],
      ]],
      [43, "Trọng lượng, lực hấp dẫn", "Weight and gravity", [
        ["Nêu được: khối lượng là số đo lượng chất của vật; trọng lượng là độ lớn lực hút của Trái Đất tác dụng lên vật.", "State that mass is the amount of matter and weight is the pull of the Earth on an object."],
        ["Nêu được khái niệm lực hấp dẫn.", "Describe gravitational attraction."],
      ]],
      [44, "Lực ma sát", "Friction", [
        ["Nêu được lực ma sát là lực tiếp xúc xuất hiện ở bề mặt tiếp xúc giữa hai vật; phân biệt ma sát nghỉ và ma sát trượt.", "State that friction acts where two surfaces touch; tell apart static and sliding friction."],
        ["Nêu được tác dụng cản trở và tác dụng thúc đẩy chuyển động của lực ma sát; ảnh hưởng tới an toàn giao thông.", "Explain how friction both opposes and helps motion, and its role in road safety."],
      ]],
      [45, "Lực cản của nước", "Water resistance", [
        ["Nêu được khi vật chuyển động trong nước (không khí) thì có lực cản tác dụng lên vật.", "State that objects moving through water (or air) feel a resistive force."],
      ]],
    ]],
    [9, "nl", "Năng lượng", "Energy", [
      [46, "Năng lượng và sự truyền năng lượng", "Energy and energy transfer", [
        ["Lấy được ví dụ để chứng tỏ năng lượng đặc trưng cho khả năng tác dụng lực.", "Give examples showing energy is the ability to exert a force or do work."],
      ]],
      [47, "Một số dạng năng lượng", "Forms of energy", [
        ["Phân loại được năng lượng theo tiêu chí; nêu được một số dạng năng lượng: động năng, thế năng, năng lượng nhiệt, điện, ánh sáng, âm thanh, hoá năng.", "Classify energy and name forms such as kinetic, potential, thermal, electrical, light, sound and chemical energy."],
      ]],
      [48, "Sự chuyển hoá năng lượng", "Energy conversion", [
        ["Lấy được ví dụ về sự chuyển hoá năng lượng; phát biểu được định luật bảo toàn năng lượng.", "Give examples of energy conversion and state the law of conservation of energy."],
      ]],
      [49, "Năng lượng hao phí", "Wasted energy", [
        ["Nêu được năng lượng hao phí luôn xuất hiện khi năng lượng được chuyển từ dạng này sang dạng khác.", "State that some energy is always wasted when energy changes form."],
      ]],
      [50, "Năng lượng tái tạo", "Renewable energy", [
        ["Lấy được ví dụ về nguồn năng lượng tái tạo và không tái tạo.", "Give examples of renewable and non-renewable energy sources."],
      ]],
      [51, "Tiết kiệm năng lượng", "Saving energy", [
        ["Đề xuất được biện pháp tiết kiệm năng lượng trong sinh hoạt hằng ngày.", "Suggest ways to save energy in daily life."],
      ]],
    ]],
    [10, "vt", "Trái Đất và bầu trời", "The Earth and the sky", [
      [52, "Chuyển động nhìn thấy của Mặt Trời. Thiên thể", "The apparent motion of the Sun. Celestial bodies", [
        ["Giải thích được hiện tượng Mặt Trời mọc và lặn hằng ngày.", "Explain why the Sun rises and sets every day."],
      ]],
      [53, "Mặt Trăng", "The Moon", [
        ["Giải thích được một số hình dạng nhìn thấy của Mặt Trăng (pha Mặt Trăng).", "Explain the phases of the Moon."],
      ]],
      [54, "Hệ Mặt Trời", "The Solar System", [
        ["Mô tả được sơ lược cấu trúc của Hệ Mặt Trời; nêu được các hành tinh cách Mặt Trời các khoảng cách khác nhau.", "Describe the Solar System and the different distances of the planets from the Sun."],
      ]],
      [55, "Ngân Hà", "The Milky Way", [
        ["Phân biệt được hệ Mặt Trời và Ngân Hà.", "Tell apart the Solar System and the Milky Way galaxy."],
      ]],
    ]],
  ],

  // ===================== LỚP 7 =====================
  7: [
    [3, "lu", "Tốc độ", "Speed", [
      [8, "Tốc độ chuyển động", "Speed of motion", [
        ["Nêu được ý nghĩa vật lí của tốc độ; viết được công thức v = s/t và các đơn vị đo tốc độ.", "Explain what speed means; write v = s/t and units of speed."],
      ]],
      [9, "Đo tốc độ", "Measuring speed", [
        ["Mô tả được cách đo tốc độ bằng đồng hồ bấm giây và cổng quang điện; thiết bị \"bắn tốc độ\".", "Describe measuring speed with a stopwatch, light gates and a speed gun."],
      ]],
      [10, "Đồ thị quãng đường – thời gian", "Distance–time graphs", [
        ["Vẽ được và dùng được đồ thị quãng đường – thời gian để mô tả chuyển động và xác định tốc độ.", "Draw and use distance–time graphs to describe motion and find speed."],
      ]],
      [11, "Thảo luận về ảnh hưởng của tốc độ trong an toàn giao thông", "Speed and road safety", [
        ["Thảo luận được ảnh hưởng của tốc độ trong an toàn giao thông.", "Discuss how speed affects road safety."],
      ]],
    ]],
    [4, "am", "Âm thanh", "Sound", [
      [12, "Sóng âm", "Sound waves", [
        ["Mô tả được các bước tiến hành thí nghiệm tạo sóng âm; giải thích được sự truyền sóng âm trong không khí.", "Describe experiments that make sound waves and explain how sound travels through air."],
      ]],
      [13, "Độ to và độ cao của âm", "Loudness and pitch", [
        ["Liên hệ được độ to của âm với biên độ âm; độ cao của âm với tần số âm.", "Relate loudness to amplitude and pitch to frequency."],
      ]],
      [14, "Phản xạ âm, chống ô nhiễm tiếng ồn", "Echoes and noise pollution", [
        ["Lấy được ví dụ về vật phản xạ âm tốt, phản xạ âm kém; đề xuất được biện pháp chống ô nhiễm tiếng ồn.", "Give examples of good and poor sound reflectors; suggest ways to reduce noise pollution."],
      ]],
    ]],
    [5, "as", "Ánh sáng", "Light", [
      [15, "Năng lượng ánh sáng. Tia sáng, vùng tối", "Light energy. Light rays and shadows", [
        ["Nêu được ánh sáng là một dạng năng lượng; vẽ được tia sáng, chùm sáng; giải thích được sự tạo thành vùng tối.", "State that light is energy; draw rays and beams; explain how shadows form."],
      ]],
      [16, "Sự phản xạ ánh sáng", "Reflection of light", [
        ["Phát biểu được nội dung định luật phản xạ ánh sáng; phân biệt phản xạ và phản xạ khuếch tán.", "State the law of reflection; tell apart regular and diffuse reflection."],
      ]],
      [17, "Ảnh của vật qua gương phẳng", "Images in a plane mirror", [
        ["Nêu được tính chất ảnh của vật qua gương phẳng và dựng được ảnh của một vật tạo bởi gương phẳng.", "State the properties of an image in a plane mirror and draw it."],
      ]],
    ]],
    [6, "dt", "Từ", "Magnetism", [
      [18, "Nam châm", "Magnets", [
        ["Tiến hành thí nghiệm để nêu được tác dụng của nam châm đến các vật liệu khác nhau; sự định hướng của thanh nam châm.", "Show by experiment how magnets act on materials and how a bar magnet points north–south."],
      ]],
      [19, "Từ trường", "Magnetic fields", [
        ["Nêu được vùng không gian bao quanh nam châm có từ trường; vẽ được đường sức từ quanh thanh nam châm.", "State that a magnet has a magnetic field around it; draw field lines around a bar magnet."],
        ["Nêu được cực Bắc địa từ và cực Bắc địa lí không trùng nhau; sử dụng la bàn tìm hướng.", "Explain that magnetic north and geographic north differ; use a compass to find direction."],
      ]],
      [20, "Chế tạo nam châm điện đơn giản", "Making a simple electromagnet", [
        ["Chế tạo được nam châm điện đơn giản và làm thay đổi được từ trường của nó bằng thay đổi dòng điện.", "Build a simple electromagnet and change its strength by changing the current."],
      ]],
    ]],
  ],

  // ===================== LỚP 8 =====================
  8: [
    [3, "ap", "Khối lượng riêng và áp suất", "Density and pressure", [
      [13, "Khối lượng riêng", "Density", [
        ["Nêu được định nghĩa khối lượng riêng; viết được công thức D = m/V và đơn vị kg/m³, g/cm³.", "Define density; write D = m/V and its units kg/m³ and g/cm³."],
        ["Vận dụng được công thức D = m/V để tính khối lượng riêng, khối lượng hoặc thể tích.", "Use D = m/V to calculate density, mass or volume."],
      ]],
      [14, "Thực hành xác định khối lượng riêng", "Practical: finding density", [
        ["Thực hiện được thí nghiệm xác định khối lượng riêng của một khối hộp chữ nhật, của một vật có hình dạng bất kì, của một lượng chất lỏng.", "Carry out experiments to find the density of a block, an irregular object and a liquid."],
      ]],
      [15, "Áp suất trên một bề mặt", "Pressure on a surface", [
        ["Nêu được khái niệm áp suất, công thức p = F/S và đơn vị Pa (N/m²).", "Define pressure, write p = F/S and its unit Pa (N/m²)."],
        ["Giải thích được một số ứng dụng về việc tăng, giảm áp suất trong đời sống.", "Explain everyday ways of increasing or reducing pressure."],
      ]],
      [16, "Áp suất chất lỏng. Áp suất khí quyển", "Liquid pressure. Atmospheric pressure", [
        ["Nêu được áp suất chất lỏng tác dụng theo mọi phương và tăng theo độ sâu; mô tả được nguyên tắc bình thông nhau, máy nén thuỷ lực.", "State that liquid pressure acts in all directions and rises with depth; describe communicating vessels and hydraulic presses."],
        ["Lấy được ví dụ chứng tỏ sự tồn tại của áp suất khí quyển và giải thích được một số hiện tượng liên quan.", "Give evidence that atmospheric pressure exists and explain related effects."],
      ]],
      [17, "Lực đẩy Archimedes", "Archimedes' principle (upthrust)", [
        ["Nêu được lực đẩy Archimedes có phương thẳng đứng, chiều từ dưới lên, độ lớn bằng trọng lượng phần chất lỏng bị vật chiếm chỗ: FA = d·V.", "State that upthrust acts upwards and equals the weight of liquid displaced: F = d·V."],
        ["Giải thích được điều kiện vật nổi, vật chìm, vật lơ lửng.", "Explain when an object floats, sinks or stays suspended."],
      ]],
    ]],
    [4, "lu", "Tác dụng làm quay của lực", "The turning effect of forces", [
      [18, "Tác dụng làm quay của lực. Moment lực", "The turning effect of a force. Moment", [
        ["Nêu được tác dụng làm quay của lực; moment lực đặc trưng cho tác dụng làm quay, M = F·d.", "Describe the turning effect of a force; the moment M = F·d measures it."],
      ]],
      [19, "Đòn bẩy và ứng dụng", "Levers and their uses", [
        ["Mô tả được cấu tạo đòn bẩy (điểm tựa, lực tác dụng, lực cản) và phân loại được ba loại đòn bẩy.", "Describe a lever (pivot, effort, load) and classify the three classes of lever."],
        ["Giải thích được cách dùng đòn bẩy để được lợi về lực trong một số ví dụ thực tế.", "Explain how levers give a force advantage in real examples."],
      ]],
    ]],
    [5, "dt", "Điện", "Electricity", [
      [20, "Hiện tượng nhiễm điện do cọ xát", "Charging by friction", [
        ["Giải thích được sơ lược nguyên nhân một vật cách điện nhiễm điện do cọ xát; có hai loại điện tích, cùng loại đẩy nhau, khác loại hút nhau.", "Explain why insulators become charged by rubbing; like charges repel and unlike charges attract."],
      ]],
      [21, "Dòng điện, nguồn điện", "Electric current and power sources", [
        ["Định nghĩa được dòng điện là dòng chuyển dời có hướng của các hạt mang điện; nêu được nguồn điện có khả năng cung cấp năng lượng điện.", "Define current as the directed flow of charged particles; state that a power source supplies electrical energy."],
        ["Phân biệt được vật dẫn điện và vật cách điện.", "Tell apart electrical conductors and insulators."],
      ]],
      [22, "Mạch điện đơn giản", "Simple circuits", [
        ["Vẽ được sơ đồ mạch điện với kí hiệu mô tả: điện trở, biến trở, chuông, ampe kế, vôn kế, cầu chì, đi ốt, đi ốt phát quang.", "Draw circuit diagrams using symbols for resistor, rheostat, bell, ammeter, voltmeter, fuse, diode and LED."],
        ["Mắc được mạch điện đơn giản với pin, công tắc, dây nối, bóng đèn.", "Build a simple circuit with a cell, switch, wires and a lamp."],
      ]],
      [23, "Tác dụng của dòng điện", "Effects of electric current", [
        ["Nêu được tác dụng nhiệt, phát sáng, hoá học, sinh lí, từ của dòng điện và ứng dụng.", "Describe the heating, lighting, chemical, physiological and magnetic effects of current and their uses."],
      ]],
      [24, "Cường độ dòng điện và hiệu điện thế", "Current and voltage", [
        ["Nêu được đơn vị cường độ dòng điện (A) và hiệu điện thế (V); cách dùng ampe kế, vôn kế.", "State the units of current (A) and voltage (V) and how to use an ammeter and a voltmeter."],
        ["Nêu được cường độ dòng điện đặc trưng cho độ mạnh yếu của dòng điện; hiệu điện thế tạo ra dòng điện.", "Explain that current measures how strong the flow is and voltage drives the current."],
      ]],
      [25, "Thực hành đo cường độ dòng điện và hiệu điện thế", "Practical: measuring current and voltage", [
        ["Đo được cường độ dòng điện và hiệu điện thế bằng dụng cụ thực hành.", "Measure current and voltage with lab meters."],
      ]],
    ]],
    [6, "nh", "Nhiệt", "Heat", [
      [26, "Năng lượng nhiệt và nội năng", "Thermal energy and internal energy", [
        ["Nêu được khái niệm năng lượng nhiệt, khái niệm nội năng; nhiệt độ càng cao thì các phân tử chuyển động càng nhanh.", "Define thermal energy and internal energy; the higher the temperature, the faster the particles move."],
      ]],
      [27, "Thực hành đo năng lượng nhiệt bằng joulemeter", "Practical: measuring thermal energy with a joulemeter", [
        ["Thực hiện được thí nghiệm đo năng lượng nhiệt mà vật nhận được khi bị đun nóng bằng joulemeter.", "Measure the thermal energy an object receives when heated, using a joulemeter."],
      ]],
      [28, "Sự truyền nhiệt", "Heat transfer", [
        ["Lấy được ví dụ về ba cách truyền năng lượng nhiệt: dẫn nhiệt, đối lưu, bức xạ nhiệt.", "Give examples of the three ways heat travels: conduction, convection and radiation."],
        ["Giải thích được một số hiện tượng và vận dụng các cách truyền nhiệt trong đời sống.", "Explain everyday effects and uses of heat transfer."],
      ]],
      [29, "Sự nở vì nhiệt", "Thermal expansion", [
        ["Thực hiện được thí nghiệm chứng tỏ các chất khác nhau nở vì nhiệt khác nhau; chất khí nở vì nhiệt nhiều nhất.", "Show that different materials expand by different amounts when heated; gases expand the most."],
        ["Lấy được ví dụ về hiện tượng nở vì nhiệt và ứng dụng.", "Give examples and uses of thermal expansion."],
      ]],
    ]],
  ],

  // ===================== LỚP 9 =====================
  9: [
    [1, "nl", "Năng lượng cơ học", "Mechanical energy", [
      [2, "Động năng. Thế năng", "Kinetic energy. Potential energy", [
        ["Viết được biểu thức động năng Wđ = ½mv² và thế năng trọng trường Wt = Ph (gần mặt đất).", "Write kinetic energy KE = ½mv² and gravitational potential energy PE = Ph near the ground."],
      ]],
      [3, "Cơ năng", "Mechanical energy", [
        ["Nêu được cơ năng là tổng động năng và thế năng; mô tả được sự chuyển hoá giữa động năng và thế năng.", "State that mechanical energy is KE + PE and describe how they change into each other."],
      ]],
      [4, "Công và công suất", "Work and power", [
        ["Viết được biểu thức A = F·s và công suất P = A/t; đơn vị J, W.", "Write W = F·s and P = W/t with units J and W."],
      ]],
    ]],
    [2, "as", "Ánh sáng", "Light", [
      [5, "Khúc xạ ánh sáng", "Refraction of light", [
        ["Nêu được hiện tượng khúc xạ ánh sáng; chiết suất của môi trường.", "Describe refraction of light and the refractive index."],
      ]],
      [6, "Phản xạ toàn phần", "Total internal reflection", [
        ["Nêu được điều kiện xảy ra phản xạ toàn phần và ứng dụng (cáp quang).", "State the conditions for total internal reflection and its use in optical fibres."],
      ]],
      [7, "Lăng kính", "Prisms", [
        ["Mô tả được sự tán sắc ánh sáng trắng qua lăng kính; màu sắc của vật.", "Describe the dispersion of white light by a prism and the colour of objects."],
      ]],
      [8, "Thấu kính", "Lenses", [
        ["Phân biệt được thấu kính hội tụ và phân kì; vẽ được đường đi của các tia sáng đặc biệt qua thấu kính.", "Tell apart converging and diverging lenses and draw the special rays through them."],
      ]],
      [9, "Thực hành đo tiêu cự của thấu kính hội tụ", "Practical: measuring the focal length of a converging lens", [
        ["Đo được tiêu cự của thấu kính hội tụ bằng dụng cụ thực hành.", "Measure the focal length of a converging lens."],
      ]],
      [10, "Kính lúp. Bài tập thấu kính", "The magnifying glass. Lens problems", [
        ["Nêu được cấu tạo, công dụng của kính lúp; giải được bài tập đơn giản về thấu kính.", "Describe the magnifying glass and solve simple lens problems."],
      ]],
    ]],
    [3, "dt", "Điện", "Electricity", [
      [11, "Điện trở. Định luật Ohm", "Resistance. Ohm's law", [
        ["Phát biểu được định luật Ohm I = U/R; nêu được điện trở của dây dẫn phụ thuộc chiều dài, tiết diện, vật liệu.", "State Ohm's law I = U/R; resistance depends on length, cross-section and material."],
      ]],
      [12, "Đoạn mạch nối tiếp, song song", "Series and parallel circuits", [
        ["Tính được cường độ dòng điện, hiệu điện thế, điện trở tương đương trong đoạn mạch nối tiếp, song song.", "Calculate current, voltage and equivalent resistance in series and parallel circuits."],
      ]],
      [13, "Năng lượng của dòng điện và công suất điện", "Electrical energy and power", [
        ["Viết được công thức W = U·I·t và P = U·I; tính được tiền điện.", "Write E = U·I·t and P = U·I; calculate an electricity bill."],
      ]],
    ]],
    [4, "dt", "Điện từ", "Electromagnetism", [
      [14, "Cảm ứng điện từ. Nguyên tắc tạo ra dòng điện xoay chiều", "Electromagnetic induction. Generating alternating current", [
        ["Mô tả được hiện tượng cảm ứng điện từ và nguyên tắc tạo ra dòng điện xoay chiều.", "Describe electromagnetic induction and how alternating current is produced."],
      ]],
      [15, "Tác dụng của dòng điện xoay chiều", "Effects of alternating current", [
        ["Nêu được các tác dụng của dòng điện xoay chiều.", "Describe the effects of alternating current."],
      ]],
    ]],
    [5, "nl", "Năng lượng với cuộc sống", "Energy and life", [
      [16, "Vòng năng lượng trên Trái Đất. Năng lượng hoá thạch", "The Earth's energy cycle. Fossil fuels", [
        ["Mô tả được sơ lược vòng năng lượng trên Trái Đất; nêu được ưu, nhược điểm của nhiên liệu hoá thạch.", "Describe the Earth's energy cycle and the pros and cons of fossil fuels."],
      ]],
      [17, "Một số dạng năng lượng tái tạo", "Renewable energy sources", [
        ["Nêu được một số dạng năng lượng tái tạo (Mặt Trời, gió, nước, sinh khối, địa nhiệt) và lợi ích của chúng.", "Describe renewable sources (solar, wind, hydro, biomass, geothermal) and their benefits."],
      ]],
    ]],
  ],
};
