import {
  Project,
  GitHubRepo,
  Experience,
  Achievement,
  SkillCategory,
  Education,
  Certification,
} from "@/types";

export const PERSONAL_INFO = {
  name: "Senthil Kumar Mahalingam",
  firstName: "Senthil Kumar",
  lastName: "Mahalingam",
  initials: "SK",
  title: "Electronics & Hardware Systems Engineer",
  tagline: "Engineering Intelligence Into Hardware.",
  subTagline:
    "Electronics engineering undergraduate specializing in FPGA development, embedded systems, VLSI design, real-time operating systems, and Edge AI.",
  bio: "Electronics engineering student at Chennai Institute of Technology specializing in VLSI Design and Technology (CGPA 8.56). Passionate about bridging silicon physics, RTL microarchitectures, and deterministic Edge AI. Experienced in custom CPU RTL design on FPGAs, industrial SMT production lines at Syrma SGS, μT-Kernel 3.0 RTOS porting on Arm Cortex-M85 (Renesas RA8P1), and INT8 quantized neural acceleration on Lattice FPGAs and Hailo-8 NPUs. Team lead for five national and international competition finalist teams, including Winner of the VLSID 2026 Design Contest.",
  institution: "Chennai Institute of Technology",
  degree: "B.E. Electronics Engineering — VLSI Design and Technology",
  period: "2024 – 2028",
  cgpa: "8.56",
  higherSecondary: {
    institution: "Velammal Bodhi Campus",
    period: "2023 – 2024",
    percentage: "93.6%",
  },
  phone: "+91 9843111656",
  email: "senthilkumarm7271@gmail.com",
  github: "https://github.com/Senthil7271",
  linkedin: "https://www.linkedin.com/in/senthil-kumar-m-904118315",
  leetcode: "https://leetcode.com/u/Senthilkumar7271",
  codechef: "https://www.codechef.com/users/sane_door_72",
  codingStats: {
    leetcode: { solved: 75, rating: 1324, url: "https://leetcode.com/u/Senthilkumar7271" },
    codechef: { solved: 100, rating: 825, url: "https://www.codechef.com/users/sane_door_72" },
    skillrack: { solved: 100 },
  },
  resumePath: "/documents/Senthil_Kumar_Mahalingam_Resume.pdf",
  photoPlaceholder: "/images/profile/profile-photo.png",
  leadership: "Team Lead — Across all 5 national & international design competitions (VLSID, TRON, VEGATHON, SEMICON India, IESA)",
  specializations: [
    "FPGA Development",
    "Embedded Systems",
    "VLSI Design",
    "Edge AI & Inference",
    "RTOS & Determinism",
  ],
  keywords: ["FPGA", "EMBEDDED SYSTEMS", "VLSI", "EDGE AI", "RTOS"],
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "proj-01",
    slug: "fpga-ai-surveillance",
    title: "AI-Based Surveillance System on Lattice FPGA",
    shortTitle: "FPGA AI Surveillance",
    category: "FPGA / Edge AI / Hardware Acceleration",
    tagline:
      "Ultra-low latency streaming CNN hardware accelerator for real-time edge multi-object detection.",
    problem:
      "Conventional video surveillance architectures rely heavily on host CPU/GPU streaming, suffering from elevated power draw, high transmission latency, and limited edge intelligence for deterministic real-time multi-object detection.",
    solution:
      "Trained and optimized a MobileNetV2 SSD neural network across a custom 80-class dataset and deployed it directly on a Lattice CertusPro NX / VVML FPGA development platform. Engineered a streaming pipelined CNN hardware accelerator core in RTL coupled to an image-processing pipeline.",
    hardware: [
      "Lattice CertusPro-NX / VVML Board",
      "CMOS Camera Sensor (MIPI CSI-2)",
      "Dedicated High-Speed BRAM Buffers",
    ],
    software: [
      "Verilog RTL",
      "Lattice Radiant / Propel",
      "MobileNetV2 SSD",
      "TensorFlow / Keras",
      "OpenCV Python Pipeline",
    ],
    metrics: [
      {
        label: "Detection Classes",
        value: "80",
        description: "Custom multi-class edge vocabulary",
      },
      {
        label: "Training Dataset",
        value: "~120,000",
        description: "Curated multi-lighting images",
      },
      {
        label: "Inference Latency",
        value: "~2.0 ms",
        description: "Hardware-accelerated edge inference",
      },
    ],
    interactiveType: "fpga-pipeline",
    teslaInspiration: {
      invention: "The Resonant Tesla Coil (1891)",
      historicalContext:
        "Nikola Tesla's electrical transformer circuit generating high-frequency alternating currents and high voltages through mutual inductive resonance.",
      metaphor:
        "Symbolizes high-energy, high-throughput signal amplification and streaming CNN hardware acceleration on FPGA fabric.",
    },
    pipelineStages: [
      {
        id: "cam-in",
        name: "Sensor Capture & Buffering",
        subtitle: "MIPI CSI-2 @ 60 FPS",
        description:
          "High-speed line-buffer capture with automatic white balance and RAW-to-RGB debayering.",
        details: [
          "Camera interface: MIPI CSI-2 differential lanes",
          "Line buffer: Dual-port Block RAM (BRAM)",
          "Direct streaming into memory mapped fabric",
        ],
        specs: { Rate: "60 FPS", Format: "RGB888", Bus: "AXI-Stream" },
      },
      {
        id: "img-proc",
        name: "Spatial Pre-processing",
        subtitle: "Hardware Normalization & Resizing",
        description:
          "Zero-latency pixel normalization and bilinear scaling engine implemented in Verilog RTL.",
        details: [
          "Fixed-point INT8 normalization pipeline",
          "Hardware 300x300 downsampling matrix",
          "Streaming systolic pixel flow without DDR roundtrips",
        ],
        specs: { Clocks: "1 clk/pixel", Format: "INT8", Latency: "12 cycles" },
      },
      {
        id: "cnn-accel",
        name: "Streaming CNN Engine",
        subtitle: "MobileNetV2 Depthwise Conv Core",
        description:
          "Hardware-accelerated 3x3 depthwise separable convolutions running directly on Lattice DSP blocks.",
        details: [
          "Parallel multiply-accumulate (MAC) systolic array",
          "Layer weight stationary caching in local ultra-RAM",
          "Fused ReLU6 and batch-normalization operations",
        ],
        specs: {
          MACs: "64 Parallel",
          Quantization: "INT8 Uniform",
          Efficiency: "98.4%",
        },
      },
      {
        id: "ssd-box",
        name: "SSD Bounding Box Head",
        subtitle: "Multi-scale Prior Box Anchoring",
        description:
          "Hardware Non-Maximum Suppression (NMS) and bounding-box coordinate decoding logic.",
        details: [
          "Multi-scale feature map aggregation (19x19, 10x10, 5x5)",
          "On-chip IoU threshold comparator",
          "Direct OSD video overlay generation",
        ],
        specs: { Classes: "80 Objects", IoU: "0.45", Latency: "< 0.3 ms" },
      },
    ],
    githubUrl: "https://github.com/Senthil7271/AMD_Slingshot",
    demoVideoUrl:
      "https://drive.google.com/file/d/1j3C_6r7CRj2bxvO6ofncCpuJjaqK8ZZM/view?usp=vids_web",
    featured: true,
    abstract:
      "An end-to-end edge AI vision system running MobileNetV2 SSD on Lattice FPGA fabric. Engineered for mission-critical surveillance, perimeter monitoring, and wildlife tracking with zero cloud dependency.",
    technicalChallenges: [
      "Fitting 80-class feature maps and weight buffers within tight FPGA on-chip BRAM boundaries without external DDR latency bottlenecks.",
      "Designing a high-throughput 3x3 convolution streaming engine that maintains 60 FPS pixel throughput without dropping video frames.",
      "Achieving robust INT8 quantization fidelity with negligible loss in Mean Average Precision (mAP) compared to FP32 baseline.",
    ],
    implementationDetails: [
      "Custom RTL Verilog accelerator integrated with Lattice Propel bus architecture.",
      "Hardware line-buffer sliding window mechanism to fetch 3x3 kernels in a single clock cycle.",
      "Pipelined Non-Maximum Suppression (NMS) module to prune overlapping candidate boxes in real time.",
      "Dedicated testbench verification using Verilator and ModelSim before synthesis.",
    ],
    keyTakeaways: [
      "Hardware-software co-design allows low-power FPGAs to achieve inference latencies competitive with power-hungry embedded GPUs.",
      "Systolic array architectures combined with INT8 quantization provide the highest throughput-per-watt for edge convolutional layers.",
    ],
  },
  {
    id: "proj-02",
    slug: "rtos-ra8p1-porting",
    title: "μT-Kernel 3.0 Porting on Renesas RA8P1",
    shortTitle: "μT-Kernel 3.0 on RA8P1",
    category: "Embedded Systems / RTOS / Arm Cortex-M85",
    tagline:
      "Deterministic real-time operating system porting and hardware abstraction targeting Arm Cortex-M85 and Ethos-U55 NPU.",
    problem:
      "Assistive technologies for visually impaired individuals require deterministic low-latency sensor ingestion, spatial voice interaction, and Edge AI inference without unpredictable jitter or thread starvation.",
    solution:
      "Engineered and ported the TRON μT-Kernel 3.0 real-time operating system onto the 480 MHz Renesas RA8P1 microcontroller (Arm Cortex-M85). Architected the Board Support Package (BSP), vector tables, context switching routines, memory map, linker scripts, and peripheral drivers in e² studio and Renesas FSP.",
    hardware: [
      "Renesas EK-RA8P1 (480 MHz Arm Cortex-M85)",
      "Arm Ethos-U55 MicroNPU",
      "MIPI D/C-PHY Camera Interface",
      "I2S Audio Codec & MEMS Microphones",
      "Parallel RGB LCD Display",
    ],
    software: [
      "μT-Kernel 3.0 (TRON Forum Specification)",
      "Renesas Flexible Software Package (FSP)",
      "e² studio IDE & GCC Arm Embedded Toolchain",
      "TensorFlow Lite for Microcontrollers (TFLM)",
      "Arm Vela NPU Compiler",
    ],
    metrics: [
      {
        label: "Processor Core",
        value: "480 MHz",
        description: "Arm Cortex-M85 with Helium MVE",
      },
      {
        label: "Real-Time Kernel",
        value: "μT-Kernel 3.0",
        description: "Deterministic preemptive scheduling",
      },
      {
        label: "Neural Acceleration",
        value: "Ethos-U55",
        description: "Co-processor hardware NPU offload",
      },
    ],
    interactiveType: "rtos-scheduler",
    teslaInspiration: {
      invention: "The AC Induction Motor (1888)",
      historicalContext:
        "Tesla's foundational breakthrough demonstrating a rotating magnetic field generated by polyphase alternating currents, eliminating mechanical commutators.",
      metaphor:
        "Design metaphor for recurring, deterministic task scheduling and non-blocking multi-threaded concurrency in μT-Kernel 3.0.",
    },
    pipelineStages: [
      {
        id: "bsp-init",
        name: "Vector & Stack Setup",
        subtitle: "Reset_Handler & SysTick",
        description:
          "Assembly initialization sequence establishing MSP/PSP stacks, FPU/Helium state, and vector table offsets (VTOR).",
        details: [
          "Exception vector remapping to high-speed TCM SRAM",
          "MPU memory protection region allocation",
          "Armv8.1-M PAC/BTI security context initialization",
        ],
        specs: { Stack: "Dual (MSP/PSP)", Alignment: "8-Byte", VTOR: "0x20000000" },
      },
      {
        id: "kernel-sched",
        name: "Deterministic Task Scheduler",
        subtitle: "Priority-based Preemption",
        description:
          "Multi-level priority queue scheduler executing strict deterministic context switches within nanoseconds.",
        details: [
          "Fast assembly context switch via PendSV handler",
          "Deterministic O(1) ready-queue bitmap lookup",
          "Priority inversion mitigation using mutex inheritance",
        ],
        specs: { Scheduling: "Preemptive", Latency: "< 420 ns", Priorites: "16 Levels" },
      },
      {
        id: "driver-fsp",
        name: "FSP HAL Drivers",
        subtitle: "DMA, I2C, SPI & SCI UART",
        description:
          "Non-blocking hardware abstraction layer bridging μT-Kernel event flags with Renesas DMA controllers.",
        details: [
          "Circular DMA buffers for camera and audio streams",
          "Zero-copy inter-task messaging via memory pools",
          "Power-mode throttling for low-standby power draw",
        ],
        specs: { DMA: "DTC & DMAC", Transfer: "Zero-Copy", UART: "Up to 921.6 kbps" },
      },
      {
        id: "npu-inference",
        name: "Ethos-U55 NPU Dispatch",
        subtitle: "Vela Compiled Graph Execution",
        description:
          "Background asynchronous invocation of quantized AI networks for offline voice recognition and OCR.",
        details: [
          "Vela optimized command stream dispatch",
          "Hardware semaphore synchronization with RTOS task queue",
          "Low-latency response without audio stutter",
        ],
        specs: { NPU: "128 MACs/cycle", Format: "INT8", Offload: "Asynchronous" },
      },
    ],
    githubUrl:
      "https://github.com/Senthil7271/Full-Stack-Physical-AI-Optimization-on-RA8P1-INT8-Vela-Ethos-U55-and-RTOS-Parallelism",
    demoVideoUrl: "https://github.com/Senthil7271/Tron_Programming_Contest",
    featured: true,
    abstract:
      "Full-stack embedded software porting and real-time system architecture on the cutting-edge Arm Cortex-M85 RA8P1 platform. Combines strict deterministic multitasking with hardware NPU inference for next-generation edge devices.",
    technicalChallenges: [
      "Adapting the generic μT-Kernel 3.0 assembly context switch to support Armv8.1-M architecture, including lazy stacking of FPU and Helium (MVE) vector registers.",
      "Configuring complex linker scripts to place time-critical interrupt handlers and scheduling kernels inside low-latency tightly-coupled memory (ITCM/DTCM).",
      "Synchronizing asynchronous Ethos-U55 NPU interrupts with RTOS event flags without introducing priority inversion or task starvation.",
    ],
    implementationDetails: [
      "Authored custom startup routines, system call dispatchers, and interrupt vector tables.",
      "Integrated Renesas FSP HAL with μT-Kernel semaphores, mutexes, and message mailboxes.",
      "Developed a multi-threaded demo system running simultaneous offline OCR, voice commands, and touchscreen GUI tasks.",
      "Finalist at the international TRON Programming Contest 2026 sponsored by Renesas.",
    ],
    keyTakeaways: [
      "Deep understanding of modern Cortex-M85 memory architectures, cache coherency, and RTOS context switching internals.",
      "Mastery of deterministic embedded engineering and bare-metal HAL driver architecture.",
    ],
  },
  {
    id: "proj-03",
    slug: "fpga-knn-classifier",
    title: "KNN Classifier Implementation on ZedBoard FPGA",
    shortTitle: "Pipelined KNN on ZedBoard",
    category: "Digital Design / Verilog / FPGA",
    tagline:
      "Fully pipelined 3-stage hardware Euclidean distance classifier achieving single-clock-cycle steady-state throughput.",
    problem:
      "Software implementations of distance-based classification algorithms (such as K-Nearest Neighbors) suffer from quadratic computational complexity and bus contention, hindering hard real-time classification in embedded safety systems.",
    solution:
      "Designed and synthesized a high-performance hardware KNN classifier in Verilog RTL targeting the Xilinx Zynq-7000 (ZedBoard). Architected a 3-stage fully pipelined Euclidean distance computational engine capable of sustaining one classification output per clock cycle in steady state.",
    hardware: [
      "Xilinx ZedBoard (Zynq-7000 SoC FPGA)",
      "High-Speed On-Chip Block RAM (BRAM)",
      "7-Segment Display & General Purpose I/O",
      "VGA/HDMI Controller Interface",
    ],
    software: [
      "Verilog RTL (Synthesizable)",
      "Xilinx Vivado Design Suite",
      "ModelSim / Questa Functional Verification",
      "Python Golden Reference Validator",
    ],
    metrics: [
      {
        label: "Architecture",
        value: "3-Stage Pipeline",
        description: "Fully pipelined streaming datapath",
      },
      {
        label: "Steady-State Rate",
        value: "1 Result / Clock",
        description: "Zero bubble insertion in active stream",
      },
      {
        label: "Inference Latency",
        value: "40 ns",
        description: "Hard real-time deterministic decision",
      },
    ],
    interactiveType: "knn-pipeline",
    teslaInspiration: {
      invention: "The Polyphase AC System & Alternator (1887)",
      historicalContext:
        "A balanced multi-phase electrical power distribution architecture delivering constant, ripple-free torque and continuous energy flow.",
      metaphor:
        "Analogous to the balanced three-stage pipelined datapath where continuous, pipelined clock cycles achieve steady-state throughput.",
    },
    pipelineStages: [
      {
        id: "stage-1",
        name: "Stage 1: Euclidean Distance Engine",
        subtitle: "Parallel Square-Difference Array",
        description:
          "Computes (X_i - Y_i)^2 across feature dimensions simultaneously using dedicated hardware DSP multipliers.",
        details: [
          "Parallel subtractor array with saturation arithmetic",
          "Fixed-point squaring units clocked at maximum frequency",
          "Direct pipeline register latching to stage 2",
        ],
        specs: { Operations: "N parallel (X-Y)^2", Precision: "16-bit Fixed", Delay: "1 Cycle" },
      },
      {
        id: "stage-2",
        name: "Stage 2: Adder Tree Accumulator",
        subtitle: "Balanced Low-Fanout Summation",
        description:
          "Balanced binary adder tree aggregating multi-dimensional squared differences into cumulative distance metrics.",
        details: [
          "Log2(N) depth balanced adder tree structure",
          "Carry-lookahead intermediate adders minimizing propagation skew",
          "Streaming output feeding the continuous sorting network",
        ],
        specs: { Depth: "Balanced Tree", Fanout: "< 4", Delay: "1 Cycle" },
      },
      {
        id: "stage-3",
        name: "Stage 3: Nearest Neighbor Selector",
        subtitle: "Hardware Comparator & Label Vote",
        description:
          "Continuously identifies minimal distance bounds and outputs dominant class labels via parallel majority voting.",
        details: [
          "Linear systolic minimum-finding comparator array",
          "Zero-bubble class label tag propagation",
          "Valid strobe generation for downstream bus ingestion",
        ],
        specs: { Latency: "1 Cycle", Throughput: "1 Decision/Cycle", Output: "Class ID" },
      },
    ],
    githubUrl: "https://github.com/Senthil7271/KNN_Classifier",
    featured: true,
    abstract:
      "A synthesizable Verilog implementation of an accelerated K-Nearest Neighbor algorithm. Showcases digital datapath engineering, pipelining, and timing closure on Xilinx Zynq-7000 FPGA silicon.",
    technicalChallenges: [
      "Balancing path delays across all three pipeline stages to achieve timing closure at high clock frequencies on Zynq-7000 fabric.",
      "Eliminating pipeline stalls and bubbles during continuous streaming of multi-dimensional test vectors.",
      "Optimizing bit-width growth in the Euclidean distance accumulator to prevent arithmetic overflow while minimizing DSP slice utilization.",
    ],
    implementationDetails: [
      "Structured in modular synthesizable Verilog RTL with parameterized feature dimensions and bit-depths.",
      "Comprehensive testbench verifying RTL behavioral waveforms against a Python floating-point golden model.",
      "Implemented AXI-Lite and AXI-Stream interfaces for seamless integration with Zynq ARM Processing System (PS).",
    ],
    keyTakeaways: [
      "RTL pipelining transforms an otherwise computationally heavy $O(N)$ algorithm into a constant single-cycle throughput pipeline in hardware.",
      "Verified digital design methodologies ensure bug-free silicon tapeout and reliable embedded execution.",
    ],
  },
  {
    id: "proj-04",
    slug: "wafer-defect-classification",
    title: "Edge AI Defect Classification for Semiconductor Inspection",
    shortTitle: "Wafer Defect Edge AI",
    category: "Edge AI / Model Optimization / Embedded Inference",
    tagline:
      "Ultra-compact 11-class MobileNetV2 defect classification system optimized via INT8 quantization for Arm Cortex-M7.",
    problem:
      "Automated optical semiconductor wafer and die inspection demands high-accuracy defect categorization, but full-precision neural networks are too massive and memory-intensive to deploy on low-power in-line inspection microcontrollers.",
    solution:
      "Developed an 11-class semiconductor defect classification pipeline based on MobileNetV2 utilizing transfer learning. Applied post-training INT8 quantization via TensorFlow Lite, compressing the model footprint by over 65% while maintaining ~85% accuracy. Validated embedded deployment on an Arm Cortex-M7 target using NXP MCUXpresso.",
    hardware: [
      "Arm Cortex-M7 Target Platform",
      "On-Chip Flash & SRAM Memory",
      "Industrial Optical Wafer Inspection Rig",
    ],
    software: [
      "Python 3.10 & TensorFlow / Keras",
      "TensorFlow Lite Post-Training Quantization (PTQ)",
      "ONNX Runtime & Conversion Pipeline",
      "NXP MCUXpresso IDE & SDK",
      "NumPy / Scikit-Learn Metric Tooling",
    ],
    metrics: [
      {
        label: "Defect Classes",
        value: "11",
        description: "Wafer pattern defect categories",
      },
      {
        label: "Accuracy",
        value: "~85%",
        description: "Validated classification accuracy",
      },
      {
        label: "Model Compression",
        value: "2.0MB → 694KB",
        description: ">65% footprint reduction via INT8",
      },
    ],
    interactiveType: "wafer-inspection",
    teslaInspiration: {
      invention: "Resonant Wireless Energy Transmission (1893)",
      historicalContext:
        "Tesla's experiments in transferring electrical potential between two finely tuned, resonant electromagnetic circuits across spatial distances.",
      metaphor:
        "Represents the conversion and transfer of high-precision FP32 neural weights into ultra-compact, calibrated INT8 integer representations for embedded silicon.",
    },
    pipelineStages: [
      {
        id: "wafer-scan",
        name: "Wafer Optical Scanning",
        subtitle: "Die Surface Image Acquisition",
        description:
          "High-resolution grayscale wafer surface imaging capturing systematic spatial defect clusters.",
        details: [
          "Grayscale normalization and center alignment",
          "Spatial filtering to reduce wafer probe marks",
          "Automated die cropping and histogram equalization",
        ],
        specs: { Type: "300mm Silicon Wafer", Resolution: "Grayscale 128x128", Clusters: "11 Patterns" },
      },
      {
        id: "feature-extract",
        name: "MobileNetV2 Inverted Residuals",
        subtitle: "Depthwise Separable Feature Maps",
        description:
          "Lightweight inverted residual blocks extracting multi-scale wafer spatial signatures with minimal MACs.",
        details: [
          "Linear bottlenecks preventing non-linearity information loss",
          "Depthwise convolutions drastically lowering parameter count",
          "Global average pooling dimensionality reduction",
        ],
        specs: { Base: "MobileNetV2", Weights: "Transfer Learned", Channels: "Expanded/Contracted" },
      },
      {
        id: "ptq-quant",
        name: "TensorFlow Lite INT8 Quantization",
        subtitle: "Weight & Activation Compression",
        description:
          "Full integer calibration converting 32-bit floating point weights into 8-bit integers.",
        details: [
          "Representative dataset calibration for dynamic ranges",
          "Elimination of floating-point emulation overhead on Cortex-M7",
          "Footprint reduction from 2.0 MB down to 694 KB",
        ],
        specs: { Reduction: "65.3%", FP32: "2.0 MB", INT8: "694 KB" },
      },
      {
        id: "m7-deploy",
        name: "Arm Cortex-M7 Embedded Inference",
        subtitle: "MCUXpresso Bare-Metal Execution",
        description:
          "Final compiled binary executing on bare-metal Cortex-M7 hardware via CMSIS-NN optimization.",
        details: [
          "CMSIS-NN SIMD instruction utilization on Cortex-M7",
          "Zero dynamic memory allocation during inference loop",
          "Direct GPIO alarm trigger upon defect detection",
        ],
        specs: { Accuracy: "~85%", Footprint: "694 KB", Platform: "Cortex-M7" },
      },
    ],
    githubUrl: "https://github.com/Senthil7271/edge-ai-wafer-defect-classifier",
    featured: true,
    abstract:
      "A complete edge-to-silicon machine learning pipeline for semiconductor manufacturing quality assurance. Translates complex computer vision algorithms into compact, power-efficient microcontrollers for real-time defect sorting.",
    technicalChallenges: [
      "Handling extreme class imbalance across 11 defect categories in historical semiconductor wafer maps.",
      "Preserving defect boundary detection fidelity when aggressively quantizing from FP32 to INT8.",
      "Fitting both the quantized model weights and the intermediate activation tensor arenas inside constrained Cortex-M7 internal SRAM.",
    ],
    implementationDetails: [
      "Trained custom classification heads on normalized wafer map datasets with extensive augmentation.",
      "Exported dual models (ONNX and TFLite INT8) with rigorous validation benchmarking.",
      "Embedded C++ deployment verified on MCUXpresso target environment.",
      "Direct relevance to Applied Materials SEMICON India 2026 challenge (Top 15 Semifinalist).",
    ],
    keyTakeaways: [
      "Model quantization is essential for transitioning advanced deep learning into physical semiconductor manufacturing equipment.",
      "Cross-domain expertise across ML algorithms and embedded processor architectures is the key driver of modern Edge AI.",
    ],
  },
];

export const ALL_GITHUB_REPOSITORIES: GitHubRepo[] = [
  {
    name: "AutoVI-Edge",
    displayName: "AutoVI Edge: Automotive Defect Detection",
    description:
      "Unsupervised PatchCore defect detector on Raspberry Pi 5 & Hailo-8 AI accelerator trained on AWS SageMaker for six automotive components.",
    language: "Python / C++",
    stars: 1,
    url: "https://github.com/Senthil7271",
    category: "Edge AI",
    highlights: ["Hailo-8 INT8 NPU", "Raspberry Pi 5", "PatchCore Algorithm", "97.24% AUROC"],
  },
  {
    name: "edge-ai-wafer-defect-classifier",
    displayName: "Edge-AI Wafer Defect Classifier",
    description:
      "Semiconductor wafer and die defect classification system using lightweight MobileNetV2 with ONNX deployment and full evaluation metrics.",
    language: "Python / Keras",
    stars: 2,
    url: "https://github.com/Senthil7271/edge-ai-wafer-defect-classifier",
    category: "Edge AI",
    highlights: ["11 Defect Classes", "INT8 Quantization", "ONNX Export", "MCUXpresso M7 Target"],
  },
  {
    name: "CNN_Accelarator",
    displayName: "Streaming CNN Hardware Accelerator",
    description:
      "High-throughput, streaming 3x3 convolution engine in pure Verilog RTL for 128x128 grayscale edge-AI inference. Toolchain: Verilator, Yosys, nextpnr.",
    language: "Verilog RTL",
    stars: 1,
    url: "https://github.com/Senthil7271/CNN_Accelarator",
    category: "FPGA & Hardware",
    highlights: ["Pure Verilog RTL", "Open-Source EDA", "3x3 Streaming Core", "Vendor-Agnostic"],
  },
  {
    name: "Full-Stack-Physical-AI-Optimization-on-RA8P1-INT8-Vela-Ethos-U55-and-RTOS-Parallelism",
    displayName: "Physical-AI Optimization on RA8P1 & Ethos-U55",
    description:
      "Full-stack edge AI and deterministic RTOS parallelism targeting the Renesas EK-RA8P1 (Cortex-M85 + Ethos-U55) with INT8 Vela compilation.",
    language: "C / C++ / RTOS",
    stars: 0,
    url: "https://github.com/Senthil7271/Full-Stack-Physical-AI-Optimization-on-RA8P1-INT8-Vela-Ethos-U55-and-RTOS-Parallelism",
    category: "Embedded & RTOS",
    highlights: ["Renesas RA8P1", "Cortex-M85 (480MHz)", "Ethos-U55 NPU", "μT-Kernel 3.0"],
  },
  {
    name: "Tron_Programming_Contest",
    displayName: "TRON Offline Embedded OCR & Voice Assistant",
    description:
      "Fully offline embedded AI assistant on Renesas EK-RA8P1 with OCR, speech interaction, environmental sensing, and LCD GUI.",
    language: "C / C++",
    stars: 0,
    url: "https://github.com/Senthil7271/Tron_Programming_Contest",
    category: "Embedded & RTOS",
    highlights: ["Finalist Award", "Offline OCR", "On-Device Voice", "LCD GUI"],
  },
  {
    name: "KNN_Classifier",
    displayName: "Pipelined KNN Classifier on ZedBoard",
    description:
      "3-stage pipelined Euclidean-distance K-Nearest Neighbor hardware accelerator in synthesizable Verilog RTL achieving 40 ns latency.",
    language: "Verilog RTL",
    stars: 0,
    url: "https://github.com/Senthil7271/KNN_Classifier",
    category: "FPGA & Hardware",
    highlights: ["ZedBoard Zynq-7000", "3-Stage Pipeline", "40 ns Latency", "1 Result/Cycle"],
  },
  {
    name: "AMD_Slingshot",
    displayName: "LATTeYES: Intelligent Edge Vision",
    description:
      "Ultra-low-power, offline Edge-AI vision system on Lattice FPGA designed for real-time surveillance across wildlife, industrial, and perimeter zones.",
    language: "Verilog / Python",
    stars: 0,
    url: "https://github.com/Senthil7271/AMD_Slingshot",
    category: "FPGA & Hardware",
    highlights: ["Lattice CertusPro", "MobileNetV2 SSD", "Video Demo Available", "Offline Edge"],
  },
  {
    name: "ARM-Bharat-SOC-Challenge",
    displayName: "ARM Offline Speech-to-Speech Translation",
    description:
      "Fully offline, ARM-optimized speech-to-speech translation system performing on-device STT (Whisper-Tiny), translation (MarianMT), and TTS (Piper).",
    language: "Kotlin / Python / C++",
    stars: 0,
    url: "https://github.com/Senthil7271/ARM-Bharat-SOC-Challenge",
    category: "Edge AI",
    highlights: ["ARM Optimized", "Whisper-Tiny", "MarianMT", "Piper Neural TTS"],
  },
  {
    name: "RISC-V-SoC-Tapeout-Learning",
    displayName: "RISC-V SoC Tapeout Program | VSD",
    description:
      "Design and implementation of a RISC-V System-on-Chip from RTL to GDSII using open-source tools as part of India's collaborative silicon initiative.",
    language: "Verilog / OpenLane",
    stars: 0,
    url: "https://github.com/Senthil7271/RISC-V-SoC-Tapeout-Learning",
    category: "VLSI & SoC Design",
    highlights: ["RISC-V Architecture", "RTL to GDSII Flow", "OpenLane & Magic", "Silicon Tapeout"],
  },
  {
    name: "Applied_Materials_Drift_Sense",
    displayName: "Applied Materials Drift Sense",
    description:
      "Advanced semiconductor sensor monitoring and drift classification architecture developed for SEMICON India 2026 Applied Materials challenge.",
    language: "Python / Embedded C",
    stars: 0,
    url: "https://github.com/Senthil7271/Applied_Materials_Drift_Sense",
    category: "VLSI & SoC Design",
    highlights: ["Top 15 Semifinalist", "Semiconductor Metrology", "Drift Analysis", "Embedded Sensing"],
  },
  {
    name: "I4C_Drift_sense_D_RAM_submission",
    displayName: "Drift Sense D-RAM Hardware Submission",
    description:
      "D-RAM sensor interface and predictive drift detection circuitry for hardware monitoring.",
    language: "Verilog / Python",
    stars: 0,
    url: "https://github.com/Senthil7271/I4C_Drift_sense_D_RAM_submission",
    category: "VLSI & SoC Design",
    highlights: ["D-RAM Interface", "Hardware Telemetry", "Signal Integrity", "Predictive Alerts"],
  },
  {
    name: "Solid_State_Stabilizer",
    displayName: "Solid State Precision Power Stabilizer",
    description:
      "Solid-state electronic voltage regulation and power stabilization controller with embedded microcontroller supervision.",
    language: "Embedded C",
    stars: 0,
    url: "https://github.com/Senthil7271/Solid_State_Stabilizer",
    category: "Embedded & RTOS",
    highlights: ["Power Electronics", "Microcontroller Control", "Zero-Crossing Switching", "Fast Transient"],
  },
  {
    name: "edgesight-ai",
    displayName: "EdgeSight AI Telemetry Framework",
    description:
      "Edge computing telemetry and visual intelligence framework for multi-sensor edge nodes.",
    language: "Python",
    stars: 1,
    url: "https://github.com/Senthil7271/edgesight-ai",
    category: "Edge AI",
    highlights: ["Sensor Telemetry", "Lightweight Inference", "Edge Compute", "Python Runtime"],
  },
  {
    name: "RTL2GDS_Deepak_week0",
    displayName: "RTL to GDSII Open-Source EDA Flow",
    description:
      "Comprehensive RTL to GDSII physical design documentation, toolchain configuration, and ASIC flow verification.",
    language: "EDA Toolchains",
    stars: 0,
    url: "https://github.com/Senthil7271/RTL2GDS_Deepak_week0",
    category: "VLSI & SoC Design",
    highlights: ["Physical Design", "Synthesis & PnR", "DRC & LVS Checks", "GDSII Generation"],
  },
  {
    name: "govassist-openenv",
    displayName: "GovAssist Open Environment",
    description:
      "Automated environment and intelligence utility framework for public service automation.",
    language: "Python",
    stars: 0,
    url: "https://github.com/Senthil7271/govassist-openenv",
    category: "Edge AI",
    highlights: ["API Integration", "Automation Pipeline", "Modular Framework"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-02",
    role: "VLSI Research Intern",
    organization: "Chennai Institute of Technology",
    location: "Chennai, India",
    period: "November – December 2025",
    type: "Research",
    responsibilities: [
      "Architected and implemented a custom CPU core architecture on Xilinx FPGA silicon.",
      "Developed synthesizable Verilog RTL for instruction decoding, ALU execution, and register file management.",
      "Conducted extensive functional verification, testbench generation, and waveform timing analysis.",
      "Performed synthesis, static timing analysis (STA), and dynamic power estimation using Cadence and Synopsys EDA tools to optimize area and operational clock frequency.",
    ],
    metrics: [
      "Custom CPU Architecture on FPGA",
      "Cadence & Synopsys EDA Flow",
      "STA Timing & Power Closure",
    ],
    technologies: [
      "Verilog RTL",
      "Xilinx Vivado",
      "Cadence Genus / Innovus",
      "Synopsys Design Compiler",
      "Static Timing Analysis",
      "FPGA Prototyping",
    ],
    accentColor: "#FACC15",
  },
  {
    id: "exp-01",
    role: "Production Intern",
    organization: "Syrma SGS Technology Ltd.",
    location: "Chennai, India",
    period: "May – June 2025",
    type: "Internship",
    responsibilities: [
      "Assisted in active industrial electronics manufacturing and surface-mount technology (SMT) production lines.",
      "Supported printed circuit board (PCB) assembly processes, reflow soldering monitoring, and automated optical inspection (AOI).",
      "Systematically monitored assembly throughput and documented production defect metrics across high-volume electronics runs.",
      "Maintained 100% adherence to rigorous industrial quality assurance and ESD/workplace safety protocols.",
    ],
    metrics: [
      "100% Adherence to Quality & Safety Protocols",
      "High-Volume SMT Production Lines",
      "Automated Optical Inspection (AOI) Tracking",
    ],
    technologies: [
      "SMT Assembly",
      "PCB Manufacturing",
      "Automated Optical Inspection (AOI)",
      "Reflow Soldering",
      "IPC Quality Standards",
      "ESD Safety Management",
    ],
    accentColor: "#EAB308",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-01",
    title: "VLSID 2026 Design Contest",
    event: "39th International Conference on VLSI Design (VLSID 2026)",
    organization: "VLSID Steering Committee & IEEE",
    award: "Winner",
    date: "January 2026",
    category: "Winner",
    description:
      "Awarded 1st Place / Winner in the premier international VLSI design contest for innovative hardware architecture and FPGA implementation.",
    verificationBadge: "Confirmed Resume Entry",
  },
  {
    id: "ach-02",
    title: "CDAC VEGATHON",
    event: "VEGA Processor National Hackathon",
    organization: "Centre for Development of Advanced Computing (C-DAC)",
    award: "2nd Runner",
    date: "March 2026",
    category: "Runner-Up",
    description:
      "Secured 2nd Runner position nationwide for engineering real-time embedded solutions on indigenous C-DAC VEGA RISC-V processors.",
    verificationBadge: "Confirmed Resume Entry",
  },
  {
    id: "ach-03",
    title: "TRON Programming Contest 2026",
    event: "International Microcontroller & RTOS Application Challenge",
    organization: "Renesas Electronics & TRON Forum",
    award: "Finalist",
    date: "June 2026",
    category: "Finalist",
    description:
      "Selected as international finalist for porting μT-Kernel 3.0 onto the Renesas RA8P1 Cortex-M85 platform and implementing an offline embedded assistant.",
    verificationBadge: "Confirmed Resume Entry",
  },
  {
    id: "ach-04",
    title: "SEMICON India 2026",
    event: "Applied Materials Semiconductor Hardware Challenge",
    organization: "Applied Materials",
    award: "Semifinalist (Top 15)",
    date: "September 2026",
    category: "Semifinalist",
    description:
      "Ranked in the Top 15 nationwide for semiconductor inspection and sensor drift analysis architectures.",
    verificationBadge: "Confirmed Resume Entry",
  },
  {
    id: "ach-05",
    title: "IESA DeepTech Hackathon 2026",
    event: "India Electronics and Semiconductor Association DeepTech Challenge",
    organization: "IESA",
    award: "Semifinalist",
    date: "February 2026",
    category: "Semifinalist",
    description:
      "Selected as semifinalist for presenting innovative Edge AI and hardware acceleration designs to industry leaders.",
    verificationBadge: "Confirmed Resume Entry",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "FPGA Development",
    icon: "Layers",
    description: "Reconfigurable silicon digital pipelines, streaming accelerators, and hardware synthesis.",
    items: [
      { name: "Verilog RTL", level: "Advanced", relatedProjects: ["fpga-ai-surveillance", "fpga-knn-classifier"] },
      { name: "Xilinx Vivado", level: "Advanced", relatedProjects: ["fpga-knn-classifier"] },
      { name: "Lattice Radiant / VVML", level: "Advanced", relatedProjects: ["fpga-ai-surveillance"] },
      { name: "ZedBoard Zynq-7000", level: "Advanced", relatedProjects: ["fpga-knn-classifier"] },
      { name: "Systolic Arrays & DSP MACs", level: "Advanced", relatedProjects: ["fpga-ai-surveillance", "fpga-knn-classifier"] },
      { name: "Xilinx Kria KV260 & Arty S-7", level: "Core", relatedProjects: [] },
    ],
  },
  {
    category: "Embedded Systems",
    icon: "Cpu",
    description: "Deterministic low-level firmware, Board Support Packages (BSP), and hardware abstraction.",
    items: [
      { name: "Renesas RA8P1 (Cortex-M85)", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Embedded C", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Renesas Flexible Software Package (FSP)", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Zero-Copy DMA & Interrupts", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "ESP32 & Raspberry Pi 5", level: "Core", relatedProjects: ["fpga-ai-surveillance"] },
      { name: "Aries V2 (C-DAC VEGA RISC-V)", level: "Core", relatedProjects: [] },
    ],
  },
  {
    category: "VLSI Design",
    icon: "Activity",
    description: "ASIC RTL-to-GDSII flow, static timing analysis (STA), and logic synthesis.",
    items: [
      { name: "Cadence Genus / Innovus", level: "Advanced", relatedProjects: [] },
      { name: "Synopsys Design Compiler", level: "Advanced", relatedProjects: [] },
      { name: "Static Timing Analysis (STA)", level: "Advanced", relatedProjects: [] },
      { name: "Dynamic Power Optimization", level: "Advanced", relatedProjects: [] },
      { name: "Custom CPU Microarchitecture", level: "Advanced", relatedProjects: [] },
      { name: "RTL Verification & Testbenches", level: "Advanced", relatedProjects: ["fpga-knn-classifier"] },
    ],
  },
  {
    category: "RTOS & Multitasking",
    icon: "Clock",
    description: "Hard real-time deterministic multitasking, kernel ports, and inter-task IPC.",
    items: [
      { name: "μT-Kernel 3.0", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "PendSV Context Switching", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Preemptive Priority Scheduling", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Semaphores, Mutexes & Event Flags", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "FreeRTOS Integration", level: "Core", relatedProjects: [] },
    ],
  },
  {
    category: "AI / ML & Edge Optimization",
    icon: "BrainCircuit",
    description: "Quantized neural networks, NPU acceleration, and edge inference compilation.",
    items: [
      { name: "Arm Vela NPU Compiler", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "TFLite INT8 Post-Training Quantization", level: "Advanced", relatedProjects: ["wafer-defect-classification"] },
      { name: "TensorFlow & Keras", level: "Advanced", relatedProjects: ["wafer-defect-classification", "fpga-ai-surveillance"] },
      { name: "Arm Ethos-U55 NPU Dispatch", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "PyTorch & ONNX Runtime", level: "Core", relatedProjects: ["wafer-defect-classification"] },
      { name: "OpenCV Computer Vision", level: "Core", relatedProjects: ["fpga-ai-surveillance"] },
    ],
  },
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Hardware description languages, systems programming, and high-level scripting.",
    items: [
      { name: "Verilog HDL (IEEE 1364)", level: "Advanced", relatedProjects: ["fpga-ai-surveillance", "fpga-knn-classifier"] },
      { name: "Embedded C (C99 / C11)", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Python 3", level: "Advanced", relatedProjects: ["wafer-defect-classification", "fpga-ai-surveillance"] },
      { name: "ARM & RISC-V Assembly", level: "Proficient", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "Java (SE)", level: "Proficient", relatedProjects: [] },
    ],
  },
  {
    category: "Communication Protocols",
    icon: "Network",
    description: "Synchronous, asynchronous, differential, and industrial bus standards.",
    items: [
      { name: "MIPI CSI-2 Differential Video", level: "Advanced", relatedProjects: ["fpga-ai-surveillance", "rtos-ra8p1-porting"] },
      { name: "SPI & QSPI High-Speed", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "I2C & I2S Audio Codecs", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "UART / RS-232", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "JTAG IEEE 1149.1 Debug", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting", "fpga-knn-classifier"] },
      { name: "CAN 2.0B & USB OTG", level: "Core", relatedProjects: [] },
    ],
  },
  {
    category: "Engineering Tools",
    icon: "Wrench",
    description: "Production Electronic Design Automation (EDA), IDEs, and simulation suites.",
    items: [
      { name: "Xilinx Vivado Design Suite", level: "Advanced", relatedProjects: ["fpga-knn-classifier"] },
      { name: "Renesas e² studio", level: "Advanced", relatedProjects: ["rtos-ra8p1-porting"] },
      { name: "NXP MCUXpresso IDE", level: "Advanced", relatedProjects: ["wafer-defect-classification"] },
      { name: "Lattice Radiant", level: "Advanced", relatedProjects: ["fpga-ai-surveillance"] },
      { name: "LTspice & Circuit Simulation", level: "Core", relatedProjects: [] },
      { name: "Git, GitHub & CI/CD", level: "Advanced", relatedProjects: [] },
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "B.E. Electronics Engineering — VLSI Design and Technology",
    institution: "Chennai Institute of Technology",
    period: "2024 – 2028",
    score: "8.56",
    scoreLabel: "CGPA",
    highlights: [
      "Rigorous specialization in digital VLSI, RTL design, semiconductor fabrication physics, and embedded firmware.",
      "Active researcher in Institute VLSI Research Laboratory focusing on custom CPU microarchitectures.",
      "Winner of VLSID 2026 International Design Contest and TRON Contest Finalist.",
    ],
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Velammal Bodhi Campus",
    period: "2023 – 2024",
    score: "93.6%",
    scoreLabel: "Board Percentage",
    highlights: [
      "Excellence in Mathematics, Physics, and Computer Science foundations.",
      "Strong analytical foundation underpinning hardware synthesis and algorithmic computation.",
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "cert-01",
    title: "System Design Using Verilog",
    issuer: "NPTEL",
  },
  {
    id: "cert-02",
    title: "Sensors and Actuators",
    issuer: "NPTEL",
  },
  {
    id: "cert-03",
    title: "Digital Electronics",
    issuer: "NPTEL",
  },
  {
    id: "cert-04",
    title: "Introduction to Industry 4.0",
    issuer: "NPTEL",
  },
  {
    id: "cert-05",
    title: "Microchip Embedded System Developer",
    issuer: "EduSkills",
  },
  {
    id: "cert-06",
    title: "Introduction to IoT and Embedded Systems",
    issuer: "Coursera",
  },
  {
    id: "cert-07",
    title: "AI Infrastructure and Operations Fundamentals",
    issuer: "Coursera",
  },
];
